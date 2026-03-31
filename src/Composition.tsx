import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 50%, #e1f5fe 100%)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
        }}
      >
        <h1
          style={{
            fontSize: 80,
            color: "#4a148c",
            marginBottom: 20,
          }}
        >
          שלי אור גיסר
        </h1>
        <div
          style={{
            fontSize: 40,
            color: "#666",
            opacity: subtitleOpacity,
          }}
        >
          AI.GOS | Creative AI Expert
        </div>
      </div>
    </AbsoluteFill>
  );
};
