/* STREET VIEW AVATAR LAB — offline shell
   The app itself keeps its data in localStorage + IndexedDB; this worker only
   makes the shell (HTML, icons, fonts) survive with no connection. */
const V = 'svlab-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('message', e => { if (e.data === 'skip-waiting') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Google Maps + Street View imagery: always live, never cached.
  if (/(^|\.)googleapis\.com$/.test(url.hostname) && url.hostname !== 'fonts.googleapis.com') return;
  if (url.hostname === 'maps.gstatic.com') return;

  // Navigations: serve the cached shell instantly, refresh it in the background.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(V).then(c => c.put('./index.html', copy));
        return res;
      }).catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // Everything else (icons, fonts): cache first, revalidate behind it.
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) {
        const copy = res.clone();
        caches.open(V).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => hit);
    return hit || net;
  }));
});
