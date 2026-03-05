import { motion } from "framer-motion";
import { useState } from "react";

function StadiumIntro({ onEnter }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      onEnter();
    }, 1200);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl mb-10"
        >
          Welcome to the Stadium
        </motion.h1>

        <motion.div
          onClick={handleClick}
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="w-20 h-20 bg-red-600 rounded-full mx-auto shadow-xl cursor-pointer"
        />

        <p className="mt-6 text-gray-400">Click the ball to enter the match</p>
      </div>
    </div>
  );
}

export default StadiumIntro;
