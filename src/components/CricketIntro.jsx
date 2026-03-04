import { motion } from "framer-motion";
import { useState } from "react";

function CricketIntro({ startSite }) {
  const [hit, setHit] = useState(false);

  const handleHit = () => {
    setHit(true);

    setTimeout(() => {
      startSite();
    }, 1500);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-900 text-white">
      <h1 className="text-3xl mb-10">Hit the ball to start the match 🏏</h1>

      <motion.div
        className="w-16 h-16 bg-red-600 rounded-full cursor-pointer shadow-lg"
        animate={hit ? { x: 700, y: -300 } : { y: [0, -20, 0] }}
        transition={{ duration: 1, repeat: hit ? 0 : Infinity }}
        onClick={handleHit}
      />
    </div>
  );
}

export default CricketIntro;
