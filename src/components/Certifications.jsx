import certbg from "../assets/cert-bg.jpg";
import guviCert from "../assets/GuviCertification.png";
import nsdcCert from "../assets/nsdcCertification.pdf";

export default function Certifications() {
  const certs = [
    {
      title: "Full Stack Development",
      org: "GUVI (IIT-Madras Incubated)",
      link: guviCert,
    },
    {
      title: "Full Stack Development",
      org: "NSDC - National Skill Development Corporation",
      link: nsdcCert,
    },
  ];

  return (
    <section
      id="certifications"
      style={{
        padding: "120px 0",
        textAlign: "center",
        backgroundImage: `url(${certbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 className="hero-name">Certifications</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "50px",
            flexWrap: "wrap",
          }}
        >
          {certs.map((c, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "30px",
                borderRadius: "12px",
                width: "280px",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 style={{ color: "white" }}>{c.title}</h3>

              <p style={{ color: "#9ca3af" }}>{c.org}</p>

              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#22c55e",
                  marginTop: "12px",
                  display: "inline-block",
                  fontWeight: "500",
                }}
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
