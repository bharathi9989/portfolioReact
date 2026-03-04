import { motion } from "framer-motion";
import { useState } from "react";

function CricketIntro({ startSite }) {
  const [hit, setHit] = useState(false);

  const handleHit = () => {
    setHit(true);

    setTimeout(() => {
      startSite();
    }, 2000);
  };

  return (
    <div className="h-screen bg-green-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl mb-10">Hit the ball to start the match 🏏</h1>

      {/* Ball */}

      <motion.div
        className="w-16 h-16 bg-red-600 rounded-full shadow-lg cursor-pointer"
        animate={hit ? { x: 800, y: -300, scale: 0.5 } : { y: [0, -30, 0] }}
        transition={{ duration: 1 }}
        onClick={handleHit}
      />

      {/* Bat animation */}

      {hit && (
        <motion.div
          initial={{ rotate: -90 }}
          animate={{ rotate: 20 }}
          transition={{ duration: 0.3 }}
          className="text-6xl mt-10"
        >
          🏏
        </motion.div>
      )}
    </div>
  );
}

export default CricketIntro;
