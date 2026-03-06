import react from "../assets/React.png";
import node from "../assets/Node.js.png";
import js from "../assets/JavaScript.png";
import mongo from "../assets/MongoDB.png";
import postgres from "../assets/PostgreSQL.png";
import html from "../assets/HTML5.png";
import css from "../assets/CSS3.png";

const logos = [react, node, js, mongo, postgres, html, css];

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* LEFT TEXT */}

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            Hi, I'm a Well-qualified Full Stack Developer familiar with a wide
            range of programming utilities and languages. Knowledgeable of
            backend and frontend development requirements with database
            management. Handles any part of the process with ease. Collaborative
            team player with a willingness to learn and grow with the
            organization.
          </p>
        </div>

        {/* RIGHT LOGO ROTATION */}

        <div className="logo-rotation">
          <div className="logo-track">
            {logos.map((logo, i) => (
              <img key={i} src={logo} alt="tech" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
