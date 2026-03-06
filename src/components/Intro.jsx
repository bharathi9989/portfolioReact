import { motion } from "framer-motion";
import { useState } from "react";

import react from "../assets/React.png";
import node from "../assets/Node.js.png";
import js from "../assets/JavaScript.png";
import mongo from "../assets/MongoDB.png";
import postgres from "../assets/PostgresSQL.png";
import mysql from "../assets/MySQL.png";
import css from "../assets/CSS3.png";
import html from "../assets/HTML5.png";
import tailwind from "../assets/Tailwind CSS.png";
import redux from "../assets/Redux.png";
import ts from "../assets/TypeScript.png";
import express from "../assets/Express.png";

import bg from "../assets/background.jpg";

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
];

export default function Intro() {
  const [showName, setShowName] = useState(false);

  const radius = 220;

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND */}
      <img src={bg} className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/70"></div>

      {/* LOGO CONTAINER */}
      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
        {logos.map((logo, i) => {
          const angle = (360 / logos.length) * i;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.img
              key={i}
              src={logo}
              initial={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: x,
                y: y,
              }}
              transition={{
                delay: i * 0.3,
                duration: 0.6,
              }}
              onAnimationComplete={() => {
                if (i === logos.length - 1) {
                  setShowName(true);
                }
              }}
              className="absolute w-14"
            />
          );
        })}
      </div>

      {/* NAME APPEARS AFTER LOGOS */}
      {showName && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute text-center"
        >
          <div>
            <h1 className="hero-name text-4xl">Hi..,</h1>
          </div>
          <h1 className="hero-name text-4xl text-yellow-400"> I'M VELUBHARATHI</h1>

          <p className="hero-name text-6xl">Full Stack Developer</p>
        </motion.div>
      )}
    </section>
  );
}
