import { useState } from "react";
import { THEME } from "../styles/theme";
import { useScrollY } from "../hooks";
import { NAV_LINKS } from "../data";

const Navbar = () => {
  const scrollY = useScrollY();
  const scrolled = scrollY > 40;
  const [active, setActive] = useState("");

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        padding: "16px 7vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled ? "rgba(7,15,10,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${THEME.border}` : "none",
        transition: "all 0.4s",
      }}
    >
      {/* Logo */}
      <div
        className="font-bebas"
        style={{ fontSize: "2rem", letterSpacing: 2, color: THEME.gold }}
      >
        VELU<span style={{ color: THEME.lime }}>XI</span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 26, flexWrap: "wrap" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-condensed"
            style={{
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: active === link ? THEME.gold : THEME.muted,
              transition: "color 0.3s",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = THEME.gold;
              setActive(link);
            }}
            onMouseLeave={(e) => {
              e.target.style.color = THEME.muted;
              setActive("");
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        data-hover
        style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: 12,
          letterSpacing: 2,
          textTransform: "uppercase",
          padding: "10px 22px",
          background: THEME.gold,
          color: THEME.dark,
          fontWeight: 700,
          clipPath:
            "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)",
          transition: "transform 0.3s",
          display: "inline-block",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
        onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Navbar;
