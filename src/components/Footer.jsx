import { motion } from "framer-motion";

import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-white/10 py-12 px-5 text-center">
      {/* Name */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hero-name text-3xl md:text-4xl"
      >
        Velubharathi
      </motion.h2>

      {/* Role */}
      <p className="mt-3 text-sm md:text-base text-gray-400">
        Full Stack Developer | React | Node.js | MongoDB
      </p>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://github.com/bharathi9989"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="GitHub" className="w-7 md:w-8 transition" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.linkedin.com/in/velubharathi-s-472b62370/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-7 md:w-8 transition"
          />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          href="mailto:er.velubharathi.s@gmail.com"
        >
          <img src={mail} alt="Email" className="w-7 md:w-8 transition" />
        </motion.a>
      </div>

      {/* Divider */}
      <div className="w-40 md:w-52 h-[2px] mx-auto my-10 bg-gradient-to-r from-green-500 to-transparent"></div>

      {/* Copyright */}
      <p className="text-xs md:text-sm text-gray-500">
        © {new Date().getFullYear()} Velubharathi. All Rights Reserved.
      </p>
    </footer>
  );
}
