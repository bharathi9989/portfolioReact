import { motion } from "framer-motion";
import { useState } from "react";

function PitchNavigation() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "GitHub", id: "github" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <section className="py-40 text-center bg-gray-950">
      <h2 className="text-3xl mb-10 text-white">Hit the Ball to Explore</h2>

      <motion.div
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="w-20 h-20 bg-red-600 rounded-full mx-auto shadow-xl cursor-pointer"
      />

      {open && (
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={`#${link.id}`}
              className="px-6 py-3 border border-green-400 rounded-lg text-white hover:bg-green-500 hover:text-black transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

export default PitchNavigation;
