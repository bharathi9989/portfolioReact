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
    <div className="hero">
      <div className="orbit-container">
        {logos.map((logo, i) => {
          const angle = (360 / logos.length) * i;

          return (
            <img
              key={i}
              src={logo}
              className="orbit-logo"
              style={{
                transform: `rotate(${angle}deg) translate(260px) rotate(-${angle}deg)`,
              }}
            />
          );
        })}
      </div>

      <div className="center-text">
        <h1>Hi I'm Velubharathi</h1>
        <p>Full Stack Developer</p>
      </div>
    </div>
  );
}
