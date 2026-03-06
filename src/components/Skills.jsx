import { motion, useScroll, useTransform } from "framer-motion";
import bg from "../assets/skills-bg.jpg";
import { useState } from "react";

import html from "../assets/HTML5.png";
import css from "../assets/CSS3.png";
import MySQL from "../assets/MySQL.png";
import js from "../assets/JavaScript.png";
import react from "../assets/React.png";
import redux from "../assets/Redux.png";
import NPM from "../assets/NPM.png";
import node from "../assets/Node.js.png";
import mongo from "../assets/MongoDB.png";
import Python from "../assets/Python.png";
import postgresSql from "../assets/PostgresSQL.png";
import Tailwind from "../assets/Tailwind CSS.png";
import Typescript from "../assets/TypeScript.png";
import Docker from "../assets/Docker.png";
import aws from "../assets/AWS.png";

const logos = [
  html,
  css,
  Tailwind,
  js,
  Typescript,
  react,
  redux,
  NPM,
  node,
  mongo,
  MySQL,
  postgresSql,
  Python,
  Docker,
  aws,
];

const words = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "node",
  "redux",
  "mongodb",
  "MySQL",
  "Postgresql",
  "Mongoose",
    "aws",
  "Docker",
  "Git",
];

export default function Skills() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.2]);

  const [bounce, setBounce] = useState(false);

  function triggerBounce() {
    setBounce(true);
    setTimeout(() => setBounce(false), 600);
  }

  return (
    <section
      id="skills"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* dark overlay */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      />

      <div
        style={{
          width: "90%",
          maxWidth: "1400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT SIDE */}

        <div style={{ width: "45%" }}>
          <motion.h2
            animate={bounce ? { y: [0, -15, 0] } : {}}
            transition={{ duration: 0.4 }}
            style={{
              color: "#ffee32",
              fontSize: "48px",
              fontStyle: "italic",
              marginBottom: "40px",
            }}
          >
            Tech Stacks
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5,1fr)",
              gap: "35px",
            }}
          >
            {logos.map((logo, i) => (
              <motion.img
                key={i}
                src={logo}
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                }}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                onHoverStart={triggerBounce}
                style={{
                  width: "70px",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE WORD CLOUD */}

        <motion.div
          style={{
            width: "500px",
            height: "500px",
            position: "relative",
            scale,
          }}
        >
          {words.map((word, i) => {
            const angle = (360 / words.length) * i;
            const radius = 180;

            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.span
                key={i}
                whileHover={{ scale: 1.3, color: "#22c55e" }}
                animate={{
                  x: [x, x + 5, x],
                  y: [y, y - 8, y],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  color: "white",
                  fontSize: `${18 + Math.random() * 30}px`,
                  fontWeight: "600",
                  transform: `translate(${x}px,${y}px)`,
                }}
                onHoverStart={triggerBounce}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}