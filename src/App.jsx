import React, { useState } from "react";
import "./App.css";

function CricketBall({ onToss }) {
  const [throwing, setThrowing] = useState(false);

  function trigger(e) {
    // keyboard support
    if (e && e.type === "keydown" && !(e.key === "Enter" || e.key === " "))
      return;
    setThrowing(false);
    // restart animation
    requestAnimationFrame(() => setThrowing(true));
    onToss && onToss();
  }

  return (
    <button
      className={"cricket-ball " + (throwing ? "throw" : "")}
      aria-label="Toss a cricket ball"
      onClick={trigger}
      onKeyDown={trigger}
      onAnimationEnd={() => setThrowing(false)}
    >
      {/* ball SVG */}
      <svg viewBox="0 0 100 100" className="ball-svg" aria-hidden="true">
        <defs>
          <radialGradient id="ballGrad" cx="30%" cy="20%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#e84b3b" />
            <stop offset="100%" stopColor="#b71f1f" />
          </radialGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#ballGrad)"
          stroke="#9b1b1b"
          strokeWidth="2"
        />
        {/* seam */}
        <path
          d="M20 30 C45 40, 55 60, 80 70"
          stroke="#fff6"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M80 30 C55 40, 45 60, 20 70"
          stroke="#fff6"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        {/* stitching marks */}
        <g stroke="#f9f3f3" strokeWidth="1.5">
          <line x1="34" y1="39" x2="38" y2="41" />
          <line x1="40" y1="43" x2="44" y2="45" />
          <line x1="46" y1="47" x2="50" y2="49" />
          <line x1="56" y1="51" x2="60" y2="53" />
        </g>
      </svg>

      {/* animated trail / particles */}
      <span className="trail" aria-hidden="true" />
      <span className="burst" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>
    </button>
  );
}

function ProjectCard({ title, stack, desc }) {
  return (
    <article className="project-card" role="article">
      <div className="card-head">
        <div className="badge">{stack}</div>
        <h3>{title}</h3>
      </div>
      <p className="desc">{desc}</p>
      <div className="card-actions">
        <a className="btn" href="#">
          View details
        </a>
        <a className="btn ghost" href="#">
          Source
        </a>
      </div>
    </article>
  );
}

export default function App() {
  const projects = [
    {
      title: "Auction Platform",
      stack: "MERN",
      desc: "Real-time auction platform with bidding, auth and live updates — MongoDB, Express, React, Node.",
    },
    {
      title: "Construction Risk Prediction",
      stack: "PERN",
      desc: "Risk prediction dashboard with Postgres-backed models and rich analytics.",
    },
  ];

  return (
    <div className="app stadium">
      <header className="site-header">
        <div
          className="scoreboard"
          role="banner"
          aria-label="Developer scoreboard"
        >
          <div className="player">
            <div className="player-name">Velubharathi</div>
            <div className="player-role">Full Stack Developer</div>
          </div>
          <div className="score">
            <div className="score-item">
              <div className="score-num">02</div>
              <div className="score-label">Projects</div>
            </div>
            <div className="score-item">
              <div className="score-num">MERN</div>
              <div className="score-label">Stack</div>
            </div>
          </div>
        </div>
      </header>

      <main className="hero" role="main">
        <div className="hero-left">
          <div className="portrait">
            {/* simple batsman silhouette built in SVG */}
            <svg viewBox="0 0 200 200" className="batsman" aria-hidden="true">
              <g
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.95"
              >
                <circle cx="50" cy="46" r="12" fill="#fff2" strokeWidth="0" />
                <path d="M60 80 C80 85, 100 100, 120 116" stroke="#fff6" />
                <path d="M70 120 L92 100 L110 130" stroke="#fff" />
                <rect
                  x="110"
                  y="118"
                  width="6"
                  height="30"
                  rx="2"
                  fill="#fff2"
                />
                <path d="M88 92 L140 76" stroke="#ffeb" strokeWidth="4" />
              </g>
            </svg>
            <div className="stadium-lights" aria-hidden="true" />
          </div>
          <div className="pitch" aria-hidden="true">
            <div className="wicket" />
          </div>
        </div>

        <div className="hero-right">
          <h1>
            Hi — I’m <span className="accent">Velubharathi</span>
          </h1>
          <p className="lead">
            Full Stack Developer building production-grade web applications. I
            merge the precision of a cricketer with clean engineering and
            scalable systems.
          </p>

          <div className="controls">
            <CricketBall
              onToss={() => {
                /* placeholder for future interactions */
              }}
            />

            <div className="cta-group">
              <a className="btn primary" href="#projects">
                Explore projects
              </a>
              <a className="btn ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>

          <div className="quick-stats" aria-hidden="true">
            <div className="stat">
              <strong>2</strong>
              <span>Major projects</span>
            </div>
            <div className="stat">
              <strong>MERN / PERN</strong>
              <span>Stacks</span>
            </div>
          </div>
        </div>
      </main>

      <section id="projects" className="projects">
        <h2>Selected projects</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="contact-card">
          <h3>Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:hello@velubharathi.dev">hello@velubharathi.dev</a>
          </p>
          <p>Open to collaboration and new opportunities.</p>
        </div>
        <div className="footer-note">Designed with a cricket theme 🏏</div>
      </footer>
    </div>
  );
}
