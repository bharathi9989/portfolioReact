import { useState,useEffect } from "react";

const Hero = () => {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "0 7vw",
        paddingTop: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
          repeating-linear-gradient(90deg,transparent,transparent 70px,rgba(30,92,48,0.06) 70px,rgba(30,92,48,0.06) 140px),
          linear-gradient(180deg,${THEME.dark} 0%,${THEME.pitchGreen} 55%,${THEME.dark} 100%)`,
        }}
      />
      {/* Center pitch strip */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: 200,
          top: 0,
          bottom: 0,
          background:
            "linear-gradient(180deg,transparent 0%,rgba(240,236,224,0.06) 35%,rgba(240,236,224,0.1) 50%,rgba(240,236,224,0.06) 65%,transparent 100%)",
          borderLeft: `1px solid rgba(240,236,224,0.08)`,
          borderRight: `1px solid rgba(240,236,224,0.08)`,
        }}
      />
      <FloatingParticles />

      {/* Left: Text */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          className="font-condensed"
          style={{
            fontSize: 12,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: THEME.lime,
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
            animation: "fadeUp 0.8s ease both",
          }}
        >
          <span
            style={{
              width: 36,
              height: 1,
              background: THEME.lime,
              display: "inline-block",
            }}
          />
          Full Stack Developer · Chennai, India
        </div>

        <h1
          className="font-bebas"
          style={{
            fontSize: "clamp(4.5rem,9.5vw,8.5rem)",
            lineHeight: 0.9,
            animation: "fadeUp 0.8s 0.1s ease both",
            animationFillMode: "both",
          }}
        >
          <span style={{ color: THEME.cream }}>VELU</span>
          <br />
          <span style={{ color: THEME.gold }}>BHARATHI</span>
        </h1>

        <div
          className="font-condensed"
          style={{
            fontSize: "clamp(1rem,2vw,1.5rem)",
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: THEME.lime,
            marginTop: 12,
            animation: "fadeUp 0.8s 0.2s ease both",
            animationFillMode: "both",
          }}
        >
          MERN · PERN · React · Redux · Tailwind CSS
        </div>

        <p
          style={{
            marginTop: 22,
            fontSize: "0.95rem",
            lineHeight: 1.75,
            color: THEME.muted,
            maxWidth: 420,
            animation: "fadeUp 0.8s 0.3s ease both",
            animationFillMode: "both",
          }}
        >
          Crafting world-class web applications with the precision of a Test
          match innings. 2 completed full-stack projects — one MERN, one PERN —
          built for performance, scalability, and long-form success.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 34,
            flexWrap: "wrap",
            animation: "fadeUp 0.8s 0.4s ease both",
            animationFillMode: "both",
          }}
        >
          <a
            href="#projects"
            data-hover
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              padding: "13px 30px",
              fontWeight: 700,
              background: THEME.gold,
              color: THEME.dark,
              clipPath:
                "polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "translateY(-3px)")
            }
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
          >
            View Projects
          </a>
          <a
            href="#contact"
            data-hover
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              padding: "13px 30px",
              background: "transparent",
              color: THEME.cream,
              border: `1px solid rgba(245,240,224,0.3)`,
              clipPath:
                "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
              transition: "transform 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.borderColor = THEME.lime;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.borderColor = "rgba(245,240,224,0.3)";
            }}
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right: Scoreboard */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 16,
          position: "relative",
          zIndex: 2,
          animation: "fadeLeft 0.8s 0.35s ease both",
          animationFillMode: "both",
        }}
      >
        <StatCounter
          label="Projects Completed"
          target={2}
          sub="MERN & PERN Stack"
          started={started}
        />
        <StatCounter
          label="Years Experience"
          target={2}
          sub="In Production"
          started={started}
        />
        <StatCounter
          label="Technologies"
          target={15}
          sub="Mastered & Growing"
          started={started}
        />
        <div style={{ marginTop: 8 }}>
          <CricketBall size={110} />
        </div>
      </div>
    </section>
  );
};

export default Hero;