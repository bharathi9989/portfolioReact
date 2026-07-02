import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [radius, setRadius] = useState(220);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(110);
      } else if (window.innerWidth < 768) {
        setRadius(140);
      } else if (window.innerWidth < 1024) {
        setRadius(180);
      } else {
        setRadius(220);
      }
    };

    updateRadius();

    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      {/* Logo Circle */}
      <div className="relative w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
        {logos.map((logo, i) => {
          const angle = (360 / logos.length) * i;

          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.img
              key={i}
              src={logo}
              alt="Technology"
              initial={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x,
                y,
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
              className="absolute w-8 sm:w-10 md:w-12 lg:w-14"
            />
          );
        })}
      </div>

      {/* Text */}
      {showName && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute text-center px-4"
        >
          <h1 className="hero-name text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Hi..,
          </h1>

          <h1 className="hero-name mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-400">
            I'M VELUBHARATHI
          </h1>

          <p className="hero-name mt-4 text-lg sm:text-2xl md:text-4xl lg:text-6xl">
            Full Stack Developer
          </p>
        </motion.div>
      )}
    </section>
  );
}
