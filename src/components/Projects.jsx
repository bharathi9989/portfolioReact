import { motion } from "framer-motion";
import bg from "../assets/projects-bg.jpg";

import react from "../assets/React.png";
import node from "../assets/Node.js.png";
import mongo from "../assets/MongoDB.png";
import tailwind from "../assets/Tailwind CSS.png";
import postgres from "../assets/PostgresSQL.png";
import framer from "../assets/Framer Motion.png";

/* sample project link (change later) */

const auctionProject = "https://auctionsplatform.netlify.app/";
const constrctionProject = "http://13.233.99.183/dashboard";
const DevPortfolio = "https://velubharathisaravanan.netlify.app";

/* project data */

const projects = [
  {
    title: "Auction Platform",
    desc: "Real time bidding platform with socket system and automated auction scheduler.",
    link: auctionProject,
    tech: [
      { icon: react, name: "React" },
      { icon: node, name: "Node" },
      { icon: mongo, name: "MongoDB" },
    ],
  },

  {
    title: "Construction Prediction",
    desc: "Predict construction cost with analytics dashboard and forecasting model.",
    link: constrctionProject,
    tech: [
      { icon: react, name: "React" },
      { icon: node, name: "Node" },
      { icon: postgres, name: "PostgreSQL" },
    ],
  },

  {
    title: "Developer Portfolio",
    desc: "Interactive developer portfolio with orbit animations and advanced UI.",
    link: DevPortfolio,
    tech: [
      { icon: react, name: "React" },
      { icon: tailwind, name: "Tailwind" },
      { icon: framer, name: "Framer Motion" },
    ],
  },
];

/* animation */

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 0.8,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",

        backgroundImage: `url(${bg})`,

        backgroundSize: "cover",

        backgroundPosition: "center",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        position: "relative",

        padding: "120px 0",
      }}
    >
      {/* overlay */}

      <div
        style={{
          position: "absolute",

          inset: 0,

          background: "rgba(0,0,0,0.75)",
        }}
      />

      <div
        style={{
          width: "90%",

          maxWidth: "1300px",

          position: "relative",

          zIndex: 2,
        }}
      >
        {/* title */}

        <h2
          className="hero-name"
          style={{
            textAlign: "center",

            fontSize: "54px",

            marginBottom: "80px",

            color: "white",
          }}
        >
          Projects
        </h2>

        {/* cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          style={{
            display: "grid",

            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",

            gap: "40px",
          }}
        >
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              variants={card}
              whileHover={{
                scale: 1.05,

                rotateX: 8,

                rotateY: -8,
              }}
              style={{
                background: "rgba(255,255,255,0.05)",

                backdropFilter: "blur(12px)",

                padding: "35px",

                borderRadius: "20px",

                border: "1px solid rgba(255,255,255,0.08)",

                height: "280px",

                display: "flex",

                flexDirection: "column",

                justifyContent: "space-between",

                boxShadow: "0 0 30px rgba(0,0,0,0.6)",

                textDecoration: "none",
              }}
            >
              {/* title */}

              <h3
                style={{
                  fontSize: "24px",

                  fontWeight: "600",

                  color: "#22c55e",

                  fontFamily: "Inter",
                }}
              >
                {p.title}
              </h3>

              {/* description */}

              <p
                style={{
                  color: "#d1d5db",

                  fontSize: "15px",

                  lineHeight: "1.6",

                  fontFamily: "Inter",
                }}
              >
                {p.desc}
              </p>

              {/* tech stack */}

              <div
                style={{
                  display: "flex",

                  gap: "12px",

                  flexWrap: "wrap",

                  alignItems: "center",
                }}
              >
                {p.tech.map((t, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",

                      alignItems: "center",

                      gap: "6px",

                      background: "rgba(255,255,255,0.06)",

                      padding: "6px 10px",

                      borderRadius: "8px",

                      fontSize: "13px",

                      color: "#ddd",
                    }}
                  >
                    <img
                      src={t.icon}
                      style={{
                        width: "18px",

                        height: "18px",
                      }}
                    />

                    <span>{t.name}</span>
                  </div>
                ))}
              </div>

              {/* view text */}

              <span
                style={{
                  color: "#22c55e",

                  fontWeight: "600",

                  fontFamily: "Inter",
                }}
              >
                View Project →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
