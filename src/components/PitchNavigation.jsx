import { motion } from "framer-motion";

function PitchNavigation() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl mb-10">Hit the Ball to Explore</h2>

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="w-20 h-20 bg-red-600 rounded-full mx-auto cursor-pointer shadow-lg"
      />
    </section>
  );
}

export default PitchNavigation;
