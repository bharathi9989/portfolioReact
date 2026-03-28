export default function Certifications() {
  const certs = [
    {
      title: "Full Stack Development",
      org: "GUVI (IIT-Madras Incubated)",
      link: "#",
    },
    {
      title: "Full Stack Development",
      org: "NSDC - National Skill Development Corporation",
      link: "#",
    },
  ];

  return (
    <section
      id="certifications"
      style={{ padding: "100px 0", textAlign: "center" }}
    >
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
            }}
          >
            <h3 style={{ color: "white" }}>{c.title}</h3>

            <p style={{ color: "#9ca3af" }}>{c.org}</p>

            <a
              href={c.link}
              target="_blank"
              style={{
                color: "#22c55e",
                marginTop: "10px",
                display: "inline-block",
              }}
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
