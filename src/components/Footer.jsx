import { motion } from "framer-motion";

import github from "../assets/GitHub.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/Mail.png";

export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(0,0,0,0.9)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-name"
      >
        Velubharathi
      </motion.h2>

      <p
        style={{
          marginTop: "10px",
          color: "#9ca3af",
          fontSize: "15px",
        }}
      >
        Full Stack Developer | React | Node | MongoDB
      </p>

      {/* SOCIAL ICONS */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://github.com/bharathi9989"
          target="_blank"
        >
          <img src={github} style={{ width: "28px" }} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.linkedin.com/in/velubharathi-s-472b62370/"
          target="_blank"
        >
          <img src={linkedin} style={{ width: "28px" }} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          href="mailto:er.velubharathi.s@gmail.com"
        >
          <img src={mail} style={{ width: "28px" }} />
        </motion.a>
      </div>

      {/* DIVIDER */}

      <div
        style={{
          width: "200px",
          height: "2px",
          margin: "40px auto",
          background: "linear-gradient(90deg,#22c55e,transparent)",
        }}
      />

      {/* COPYRIGHT */}

      <p
        style={{
          color: "#6b7280",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Velubharathi. All rights reserved.
      </p>
    </footer>
  );
}
