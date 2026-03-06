import { motion } from "framer-motion";
import { useState } from "react";

import css from "../assets/CSS3.png";
import express from "../assets/Express.png";
import html from "../assets/HTML5.png";
import js from "../assets/JavaScript.png";
import mongo from "../assets/MongoDB.png";
import mysql from "../assets/MySQL.png";
import node from "../assets/Node.js.png";
import npm from "../assets/NPM.png";
import postgres from "../assets/PostgresSQL.png";
import python from "../assets/Python.png";
import react from "../assets/React.png";
import redux from "../assets/Redux.png";
import tailwind from "../assets/Tailwind CSS.png";
import ts from "../assets/TypeScript.png";

import bg from "../assets/background.jpg";

function StadiumIntro() {
  const [orbitStart, setOrbitStart] = useState(false);

  const logos = [
    react,
    node,
    js,
    mongo,
    postgres,
    mysql,
    css,
    html,
    tailwind,
    redux,
    ts,
    express,
    npm,
    python,
  ];

  return (
    <div
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Logo container */}
      <div className="relative w-[520px] h-[520px] flex items-center justify-center">
        {logos.map((logo, index) => {
          const angle = (360 / logos.length) * index;

          return (
            <motion.img
              key={index}
              src={logo}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={
                orbitStart
                  ? {
                      opacity: 1,
                      scale: 1,
                      rotate: angle,
                      x: Math.cos((angle * Math.PI) / 180) * 220,
                      y: Math.sin((angle * Math.PI) / 180) * 220,
                    }
                  : {
                      opacity: 1,
                      scale: 1,
                    }
              }
              transition={{
                delay: index * 0.3,
                duration: 0.8,
              }}
              onAnimationComplete={() => {
                if (index === logos.length - 1) {
                  setOrbitStart(true);
                }
              }}
              className="absolute w-14 orbit-logo"
            />
          );
        })}
      </div>

      {/* Name reveal */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4 }}
        className="absolute bottom-24 text-center"
      >
        <h1 className="text-5xl font-bold text-white">Hi I'm Velubharathi</h1>

        <p className="text-green-400 text-xl mt-3">Full Stack Developer</p>
      </motion.div>
    </div>
  );
}

export default StadiumIntro;
