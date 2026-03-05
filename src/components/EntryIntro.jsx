import { motion } from "framer-motion";
import ball from "../assets/cricket-ball.png";

function EntryIntro() {
  return (
    <div className="h-screen bg-black flex items-center justify-center text-white overflow-hidden">
      {/* Cricket Ball Animation */}
      <motion.img
        src={ball}
        alt="cricket ball"
        initial={{ x: -500, y: -300, rotate: -180 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute w-24"
      />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-3">Hi, I'm Velubharathi</h1>

        <p className="text-xl text-gray-400">Full Stack Developer</p>
      </motion.div>
    </div>
  );
}

export default EntryIntro;
