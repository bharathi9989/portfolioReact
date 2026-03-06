import { motion } from "framer-motion";

const projects = [
  {
    title: "Auction Platform",
    desc: "Real-time bidding platform using MERN stack.",
    tech: "React Node MongoDB",
  },

  {
    title: "Construction Prediction",
    desc: "Machine learning prediction dashboard.",
    tech: "Python React",
  },

  {
    title: "Portfolio Website",
    desc: "Interactive developer portfolio.",
    tech: "React Tailwind",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            whileHover={{
              rotateX: 10,
              rotateY: -10,
              scale: 1.05,
            }}
            transition={{ type: "spring" }}
          >
            <h3>{p.title}</h3>

            <p>{p.desc}</p>

            <span>{p.tech}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
