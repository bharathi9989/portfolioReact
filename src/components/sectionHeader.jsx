import { THEME } from "../styles/theme";
import { useInView } from "../hooks";

const SectionHeader = ({ tag, title, highlight, centered = false }) => {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 48,
        textAlign: centered ? "center" : "left",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s, transform 0.7s",
      }}
    >
      {/* Tag */}
      <div
        className="font-condensed"
        style={{
          fontSize: 11,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: THEME.lime,
          display: "flex",
          alignItems: "center",
          gap: 12,
          justifyContent: centered ? "center" : "flex-start",
          marginBottom: 12,
        }}
      >
        <span
          style={{
            width: 28,
            height: 1,
            background: THEME.lime,
            display: "inline-block",
          }}
        />
        {tag}
        <span
          style={{
            width: 28,
            height: 1,
            background: THEME.lime,
            display: "inline-block",
          }}
        />
      </div>

      {/* Title */}
      <h2
        className="font-bebas"
        style={{
          fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
          lineHeight: 1,
          color: THEME.cream,
        }}
      >
        {title} <span style={{ color: THEME.gold }}>{highlight}</span>
      </h2>
    </div>
  );
};

export default SectionHeader;
