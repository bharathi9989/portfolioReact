import certbg from "../assets/cert-bg.jpg";
import guviCert from "../assets/GuviCertification.png";
import nsdcCert from "../assets/nsdcCertification.pdf";
import LearnsHub from "../assets/React_certificate.png";

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
    {
      title: "React Certification",
      org: "Learns Connect",
      link: LearnsHub,
    },
  ];

  return (
    <section
      id="certifications"
      className="relative py-20 md:py-28 bg-cover bg-center"
      style={{
        backgroundImage: `url(${certbg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="hero-name text-3xl md:text-5xl text-center">
          Certifications
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]"
            >
              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>

              <p className="mt-3 text-gray-400 leading-7">{cert.org}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 text-green-400 font-semibold hover:text-green-300 transition"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
