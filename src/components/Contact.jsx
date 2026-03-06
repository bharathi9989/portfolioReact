import { motion } from "framer-motion";
import bg from "../assets/contact-bg.jpg";

import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/Mail.png";

export default function Contact() {
  function copyEmail() {
    navigator.clipboard.writeText("er.velubharathi.s@gmail.com");
    alert("Email copied!");
  }

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "120px 0",
      }}
    >
      {/* overlay */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
        }}
      />

      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* title */}

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-name"
          style={{
            textAlign: "center",
            fontSize: "54px",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            textAlign: "center",
            color: "#d1d5db",
            marginBottom: "80px",
            fontSize: "18px",
          }}
        >
          Have a project idea or job opportunity? Let's talk.
        </motion.p>

        {/* layout */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
          }}
        >
          {/* CONTACT CARDS */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            {/* EMAIL */}

            <motion.a
              href="mailto:er.velubharathi.s@email.com"
              whileHover={{ scale: 1.05 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                background: "rgba(255,255,255,0.05)",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                textDecoration: "none",
              }}
            >
              <img src={mail} style={{ width: "28px" }} />

              <div>
                <h4 style={{ color: "white" }}>Email</h4>
                <p style={{ color: "#9ca3af" }}>Send me a mail</p>
              </div>
            </motion.a>

            {/* GITHUB */}

            <motion.a
              href="https://github.com/bharathi9989"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                background: "rgba(255,255,255,0.05)",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                textDecoration: "none",
              }}
            >
              <img src={github} style={{ width: "28px" }} />

              <div>
                <h4 style={{ color: "white" }}>GitHub</h4>
                <p style={{ color: "#9ca3af" }}>View my code</p>
              </div>
            </motion.a>

            {/* LINKEDIN */}

            <motion.a
              href="https://www.linkedin.com/in/velubharathi-s-472b62370/"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                background: "rgba(255,255,255,0.05)",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                textDecoration: "none",
              }}
            >
              <img src={linkedin} style={{ width: "28px" }} />

              <div>
                <h4 style={{ color: "white" }}>LinkedIn</h4>
                <p style={{ color: "#9ca3af" }}>Let's connect</p>
              </div>
            </motion.a>
          </div>

          {/* CONTACT FORM */}

          <motion.form
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              background: "rgba(255,255,255,0.05)",
              padding: "35px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <input
              placeholder="Your Name"
              style={{
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                outline: "none",
                backdropFilter: "blur(6px)",
              }}
            />

            <input
              placeholder="Email"
              style={{
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                outline: "none",
                backdropFilter: "blur(6px)",
              }}
            />

            <textarea
              placeholder="Message"
              rows="5"
              style={{
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                outline: "none",
                backdropFilter: "blur(6px)",
              }}
            />

            <button
              type="button"
              style={{
                background: "#22c55e",
                color: "black",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* resume */}

        <div style={{ textAlign: "center", marginTop: "70px" }}>
          <a
            href="/resume.pdf"
            download
            style={{
              background: "#22c55e",
              color: "black",
              padding: "12px 30px",
              borderRadius: "8px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
