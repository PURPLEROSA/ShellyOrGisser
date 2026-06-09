# 🧞 GenieLabs Prompt Playbook — Bingo Blitz
**מאת שלי אור גיסר · @AI.GOS · Generative AI Design Lead**

ספרייה מוכנה-להדבקה לפרומפטים בכלי GenieLabs, לשתי תמות האלבום: **Where's Waldo** ו-**Quotes**.
הפרומפטים באנגלית (שפת הקלט של הכלי). את התיאור העברי השאירו לעצמכם.

> ⚠️ הערה: הפרומפטים מבוססים על מיפוי הממשק + best-practice. עם **ספר המותג (PDF)** ניתן לדייק
> ערכי צבע (HEX), טון, ופרופורציות דמות. כדאי להחליף `[BRAND PALETTE]` בערכים האמיתיים.

---

## 🧩 תבנית הפרומפט הקבועה (העתק והתאם)
```
[subject] + [action / emotion] + [scene / setting] +
[Bingo Blitz art style] + [palette: BRAND PALETTE] +
[lighting] + [composition / negative space] + [use-case]
```
**כללי זהב:**
- בחרי את ה-**Recipe הנכון** (Winston ≠ Moxie ≠ Blitzy) — שימוש שגוי = off-brand.
- הפעילי **Improve Prompt** כשלא בטוחה בניסוח.
- העלי **Reference Image** כשיש דוגמה — הכלי ימיר אותה לפרומפט.
- בחרי **יחס תמונה** לפי use-case (1:1 אייקון/סושיאל · 16:9 רקע · 9:21 באנר גבוה).
- שמרי כל פלט מוצלח ב-**Gallery** כ-reference עתידי.

---

## 🔎 תמה 1 — Where's Waldo (חפש-ומצא)
מטרה: סצנות עמוסות, צבעוניות ופרטניות עם דמויות מוסתרות. **צפיפות מבוקרת** + **תאורה אחידה**.

### 1.1 רקע סצנה ראשי — *Backgrounds / MAP Team · 16:9*
```
A vibrant top-down bustling carnival scene in the Bingo Blitz art style,
packed with dozens of tiny colorful characters, balloons, food stalls and
confetti. Bright saturated palette [BRAND PALETTE], clean readable foreground
details, even soft lighting suitable for a seek-and-find game layout.
```

### 1.2 וריאציית סצנה — חוף — *Magic Composition · @BingoBlitz · 16:9*
```
@BingoBlitz a busy beach boardwalk crowd, hide Blitzy the cat among
sunbathers and ice-cream stands, playful cartoon style, high detail,
consistent lighting so the hidden character is findable but not obvious.
```

### 1.3 דמות להחבאה — *Characters: Blitzy · 1:1, רקע שקוף אם קיים*
```
Blitzy the cat in a small playful crouching pose, Bingo Blitz character
style, full body, clean edges for compositing into a busy scene,
neutral expression, [BRAND PALETTE].
```

### 1.4 אייקון אלבום / Collection — *ToolBox / Icons · 1:1*
```
A magnifying glass icon over a colorful crowd silhouette, Bingo Blitz
UI icon style, glossy, vibrant, centered, transparent-friendly background.
```

**Workflow מומלץ:** הפיקי רקע (1.1) → ב-Agent Studio הריצי **Image Remix** כדי להחדיר אותו
לכל הווריאציות → הוסיפי דמויות (1.3) דרך Magic Composition → **Resizer** ליחסים הסופיים.

---

## 💬 תמה 2 — Quotes (ציטוטים)
מטרה: כרטיסי ציטוט עם דמות Bingo + טיפוגרפיה משחקית. הכוכבים: **Text Editing** + **Social Post Maker**.

### 2.1 דמות עם שלט ריק — *Characters: Moxie · Magic Composition · 1:1*
```
Moxie smiling and holding a blank wooden sign, Bingo Blitz character style,
warm golden bokeh background [BRAND PALETTE], generous clear space at the
top for bold playful typography, centered composition, social-ready.
```

### 2.2 רקע ציטוט נקי — *Backgrounds → ToolBox: Text Editing · 1:1*
```
Soft pastel confetti background in Bingo Blitz palette [BRAND PALETTE],
subtle radial glow in the center, minimal and uncluttered to keep quote
text fully legible.
```
ואז דרך **Text Editing** הוסיפי:
```
"Lucky's my middle name"
```

### 2.3 פוסט ציטוט מלא — *Social Post Maker (Beta) · 1:1 / 9:16*
```
Instagram-ready Bingo Blitz quote post: Blitzy peeking from the corner,
bright festive background [BRAND PALETTE], bold centered quote text area,
brand logo space at the bottom.
```

### 2.4 הנפשת ציטוט לסושיאל — *Social Tools: Image Animator*
```
Animate the quote card: gentle floating confetti, soft glow pulse on the
text, subtle character blink — 3-5s loop for Instagram/Facebook.
```

**Workflow מומלץ:** ייצרי רקע אחיד (2.2) → הניחי עליו סדרת ציטוטים שונים (Text Editing) →
הוסיפי דמות (2.1) לעקביות → **Image Animator** לגרסת וידאו → **Resizer** לכל פלטפורמה.

---

## ✅ צ'קליסט QA לפני Handoff
- [ ] צבעים תואמים את **ספר המותג** (לא רק "נראה נכון")
- [ ] פרופורציות הדמות נכונות ל-Recipe
- [ ] טקסט קריא לחלוטין על הרקע
- [ ] יחס תמונה נכון ל-use-case
- [ ] יש לפחות **2–3 וריאציות** ל-A/B
- [ ] נשמר ב-Gallery עם שם ברור (theme_item_v#)
