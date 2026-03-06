import react from "../assets/React.png";
import node from "../assets/Node.js.png";
import js from "../assets/JavaScript.png";
import mongo from "../assets/MongoDB.png";
import postgres from "../assets/PostgreSQL.png";
import mysql from "../assets/MySQL.png";
import css from "../assets/CSS3.png";
import html from "../assets/HTML5.png";
import tailwind from "../assets/Tailwind CSS.png";
import redux from "../assets/Redux.png";
import ts from "../assets/TypeScript.png";
import express from "../assets/Express.png";

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

export default function TechOrbit() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* Orbit container */}
      <div className="orbit">
        {logos.map((logo, index) => {
          const angle = (360 / logos.length) * index;

          return (
            <img
              key={index}
              src={logo}
              className="orbit-logo"
              style={{
                transform: `rotate(${angle}deg) translate(220px) rotate(-${angle}deg)`,
              }}
            />
          );
        })}
      </div>

      {/* Center text */}
      <div className="absolute text-center">
        <h1 className="text-5xl font-bold text-orange-400 glow">
          Hi I'm Velubharathi
        </h1>

        <p className="text-xl mt-3 text-white">Full Stack Developer</p>
      </div>
    </div>
  );
}
