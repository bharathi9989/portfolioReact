import { motion } from "framer-motion";
import { useState } from "react";

import react from "../assets/React.png";
import node from "../assets/Node.js.png";
import js from "../assets/JavaScript.png";
import mongo from "../assets/MongoDB.png";
import postgres from "../assets/PostgresSQL.png";
import html from "../assets/HTML5.png";
import css from "../assets/CSS3.png";

import bg from "../assets/about-bg.jpg";

const logos = [react, node, js, mongo, postgres, html, css];

export default function About() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 20;
    const rotateX = -(y / rect.height - 0.5) * 20;

    setRotateX(rotateX);
    setRotateY(rotateY);
  }

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND */}

      <motion.div
        initial={{ x: 400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      />

      {/* CONTENT */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "90%",
          maxWidth: "1400px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* TEXT */}

        <motion.div
          initial={{ x: -250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          style={{ width: "600px", color: "white" }}
        >
          <h2
            style={{
              fontSize: "46px",
              color: "#ffee32",
              fontFamily: "cursive",
              marginBottom: "20px",
            }}
          >
            About Me
          </h2>

          <p style={{ fontSize: "20px", lineHeight: "1.7" }}>
            Hi, I'm a Well-qualified Full Stack Developer familiar with a wide
            range of programming utilities and languages.
          </p>

          <p style={{ marginTop: "15px", fontSize: "20px", lineHeight: "1.7" }}>
            Knowledgeable of backend and frontend development requirements with
            database management. Handles any part of the process with ease.
          </p>

          <p style={{ marginTop: "15px", fontSize: "20px", lineHeight: "1.7" }}>
            Collaborative team player with a willingness to learn and grow with
            the organization.
          </p>
        </motion.div>

        {/* ORBIT SYSTEM */}

        <div
          style={{
            width: "420px",
            height: "420px",
            perspective: "1000px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "360px",
              height: "360px",
              transformStyle: "preserve-3d",
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              animation: "orbitRotate 20s linear infinite",
            }}
          >
            {logos.map((logo, i) => {
              const angle = (360 / logos.length) * i;

              return (
                <img
                  key={i}
                  src={logo}
                  className="orbit-logo"
                  style={{
                    position: "absolute",
                    width: "70px",
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style>
        {`

        @keyframes orbitRotate{

          from{
            transform:rotateZ(0deg);
          }

          to{
            transform:rotateZ(360deg);
          }

        }

        .orbit-logo{

          transition:0.35s;

        }

        .orbit-logo:hover{

          transform:scale(1.2)
          drop-shadow(0 0 15px #22c55e)
          drop-shadow(0 0 35px #22c55e);

        }

        `}
      </style>
    </section>
  );
}
