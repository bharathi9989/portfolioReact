import { motion } from "framer-motion";
import bg from "../assets/contact-bg.jpg";

import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center py-20 px-5"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-name text-center text-4xl md:text-5xl text-white"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-300 mt-5 mb-14 text-base md:text-lg"
        >
          Have a project idea or job opportunity? Let's talk.
        </motion.p>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Cards */}
          <div className="flex flex-col gap-6">
            {/* Email */}
            <motion.a
              href="mailto:er.velubharathi.s@gmail.com"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition"
            >
              <img src={mail} alt="Mail" className="w-8 h-8" />

              <div>
                <h4 className="text-white text-lg font-semibold">Email</h4>
                <p className="text-gray-400">Send me a mail</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/bharathi9989"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition"
            >
              <img src={github} alt="GitHub" className="w-8 h-8" />

              <div>
                <h4 className="text-white text-lg font-semibold">GitHub</h4>
                <p className="text-gray-400">View my code</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/velubharathi-s-472b62370/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition"
            >
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />

              <div>
                <h4 className="text-white text-lg font-semibold">LinkedIn</h4>
                <p className="text-gray-400">Let's connect</p>
              </div>
            </motion.a>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col gap-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-green-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-green-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white outline-none resize-none focus:border-green-500"
            />

            <button
              type="button"
              className="rounded-lg bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Resume */}
        <div className="mt-14 flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="rounded-lg bg-green-500 px-8 py-3 font-semibold text-black transition hover:bg-green-400"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
