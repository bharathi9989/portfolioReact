import { motion } from "framer-motion";

const links = [
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "GitHub", id: "github" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

function StadiumNav() {
  return (
    <div className="flex flex-col items-center py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-10">🏏 Stadium Navigation</h2>

      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-24 h-24 bg-red-600 rounded-full shadow-xl mb-8 cursor-pointer"
      />

      <div className="flex flex-wrap justify-center gap-6 max-w-xl">
        {links.map((link) => (
          <button
            key={link.label}
            className="px-6 py-3 border border-green-400 rounded-lg hover:bg-green-500 hover:text-black transition"
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StadiumNav;
