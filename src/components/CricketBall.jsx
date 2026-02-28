const CricketBall = ({ size = 100 }) => (
  <div
    style={{
      width: size,
      height: size,
      background: "radial-gradient(circle at 33% 33%, #e74c3c, #8b3a2a)",
      borderRadius: "50%",
      position: "relative",
      boxShadow: `0 0 ${size * 0.4}px rgba(192,57,43,0.5), inset -5px -5px 15px rgba(0,0,0,0.35)`,
      animation: "spinBall 4s linear infinite, float 3s ease-in-out infinite",
    }}
  >
    {/* Horizontal seam */}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "8%",
        right: "8%",
        height: 2,
        background: "rgba(255,255,255,0.25)",
        borderRadius: "50%",
        transform: "translateY(-50%)",
      }}
    />
    {/* Vertical seam */}
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "8%",
        bottom: "8%",
        width: 2,
        background: "rgba(255,255,255,0.15)",
        borderRadius: "50%",
        transform: "translateX(-50%)",
      }}
    />
  </div>
);

export default CricketBall;
