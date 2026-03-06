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
  const [showName, setShowName] = useState(false);

  const logos = [
    { src: react, x: -150, y: -120 },
    { src: node, x: 150, y: -120 },
    { src: js, x: -200, y: 40 },
    { src: html, x: -80, y: 160 },
    { src: css, x: 80, y: 160 },
    { src: mongo, x: 200, y: 40 },
    { src: mysql, x: -220, y: -40 },
    { src: postgres, x: 220, y: -40 },
    { src: express, x: 0, y: -200 },
    { src: npm, x: -40, y: -240 },
    { src: python, x: 40, y: -240 },
    { src: redux, x: -160, y: 220 },
    { src: tailwind, x: 160, y: 220 },
    { src: ts, x: 0, y: 260 },
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
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative w-[450px] h-[450px] flex items-center justify-center">
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo.src}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, x: logo.x, y: logo.y }}
            transition={{ delay: index * 0.35 }}
            onAnimationComplete={() =>
              index === logos.length - 1 && setShowName(true)
            }
            className="absolute w-14 burning-logo"
          />
        ))}
      </div>

      {showName && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-24 text-center"
        >
          <div className="center-text">
            <h1 className="dev-name">Hi I'm Velubharathi</h1>

            <p className="dev-role">Full Stack Developer</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default StadiumIntro;