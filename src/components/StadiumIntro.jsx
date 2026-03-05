import { motion } from "framer-motion";
import { useState } from "react";

import ball from "../assets/cricket-ball.png";

import react from "../assets/React.png";
import node from "../assets/Node.js.png";
import js from "../assets/JavaScript.png";
import html from "../assets/HTML5.png";
import css from "../assets/CSS3.png";
import tailwind from "../assets/Tailwind CSS.png";
import mongo from "../assets/MongoDB.png";
import postgres from "../assets/PostgresSQL.png";
import express from "../assets/Express.png";

function StadiumIntro() {
  const [showLogos, setShowLogos] = useState(false);

  const logos = [
    { src: react, x: -220, y: -120 },
    { src: node, x: 220, y: -120 },
    { src: js, x: -260, y: 80 },
    { src: html, x: -120, y: 200 },
    { src: css, x: 120, y: 200 },
    { src: tailwind, x: 260, y: 80 },
    { src: mongo, x: -60, y: -240 },
    { src: postgres, x: 60, y: -240 },
    { src: express, x: 0, y: 260 },
  ];

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      {/* CRICKET BALL ENTRY */}

      <motion.img
        src={ball}
        initial={{ x: -600, y: -350, rotate: -180, scale: 0.5 }}
        animate={{
          x: [-600, -250, 0],
          y: [-350, 150, 0],
          rotate: [0, 180, 360],
          scale: [0.5, 0.9, 1.4],
        }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
        }}
        onAnimationComplete={() => setShowLogos(true)}
        className="absolute w-44 drop-shadow-[0_0_60px_orange]"
      />

      {/* TECH LOGOS */}

      {showLogos &&
        logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo.src}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: logo.x,
              y: logo.y,
            }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 120,
            }}
            className="absolute w-16 drop-shadow-[0_0_25px_orange]"
          />
        ))}

      {/* NAME */}

      {showLogos && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-24 text-center"
        >
          <h1 className="text-5xl font-bold text-green-400">Velubharathi</h1>

          <p className="text-xl text-gray-400 mt-2">Full Stack Developer</p>
        </motion.div>
      )}
    </div>
  );
}

export default StadiumIntro;
