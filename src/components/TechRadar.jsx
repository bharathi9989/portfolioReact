import techbg from "../assets/tech-bg.jpg";

import HTML from "../assets/HTML5.png";
import CSS from "../assets/CSS3.png";
import react from "../assets/React.png";
import js from "../assets/JavaScript.png";
import tailwind from "../assets/Tailwind CSS.png";

import node from "../assets/Node.js.png";
import express from "../assets/Express.png";

import mongo from "../assets/MongoDB.png";
import postgres from "../assets/PostgresSQL.png";
import MySQL from "../assets/MySQL.png";

import git from "../assets/github.png";
import npm from "../assets/NPM.png";
import docker from "../assets/Docker.png";
import aws from "../assets/AWS.png";
import Redux from "../assets/Redux.png";
import GitHubGlobe from "./GitHubGlobe";

const tech = [
  HTML,
  CSS,
  js,
  react,
  Redux,
  tailwind,
  node,
  express,
  mongo,
  postgres,
  MySQL,
  git,
  npm,
  docker,
  aws,
];

export default function TechRadar() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${techbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.85)",
        }}
      />

      <div style={{ position: "relative", textAlign: "center" }}>
        <h2 className="hero-name" style={{ marginBottom: "20px" }}>
          Tech Sphere
        </h2>

        <p style={{ color: "#9ca3af" }}>
          Technologies I use to build scalable products
        </p>
      </div>

      {/* SPHERE */}

      <div className="sphere-container">
        <div className="sphere">
          {tech.map((icon, i) => {
            const angle = (360 / tech.length) * i;

            return (
              <img
                key={i}
                src={icon}
                className="sphere-icon"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(200px)`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* GITHUB LIVE STATUS */}

      <div
        style={{
          position: "relative",
          marginTop: "120px",
          textAlign: "center",
        }}
      >
        <h2 className="hero-name" style={{ marginBottom: "40px" }}>
          GitHub Activity
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {/* GitHub Stats */}

          <div
            style={{ display: "flex", gap: "20px", justifyContent: "center" }}
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=bharathi9989&show_icons=true&theme=tokyonight&hide_border=true"
              alt="github stats"
              style={{ width: "420px" }}
            />

            <img
              src="https://streak-stats.demolab.com?user=bharathi9989&theme=tokyonight&hide_border=true"
              alt="github streak"
              style={{ width: "420px" }}
            />
          </div>
          {/* GitHub Contribution Graph */}

          <div
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=bharathi9989&theme=tokyo-night&hide_border=true&area=true"
              alt="github activity graph"
              style={{
                width: "900px",
                maxWidth: "95%",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
        <GitHubGlobe />
      </div>
    </section>
  );
}
