import { motion } from "framer-motion";

function HeroScoreboard() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/60 border border-green-500/30 backdrop-blur-xl rounded-2xl p-10 max-w-2xl text-center shadow-xl"
      >
        <p className="text-green-400 mb-3">🏟 Stadium Scoreboard</p>

        <h1 className="text-5xl font-bold mb-4 text-white">Velubharathi</h1>

        <h2 className="text-xl text-gray-300 mb-8">Full Stack Developer</h2>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-gray-400">Matches Played</p>
            <p className="text-green-400 text-lg font-semibold">
              250+ Coding Problems
            </p>
          </div>

          <div>
            <p className="text-gray-400">Strike Rate</p>
            <p className="text-green-400 text-lg font-semibold">
              JS • React • Node
            </p>
          </div>

          <div>
            <p className="text-gray-400">Current Series</p>
            <p className="text-green-400 text-lg font-semibold">
              Construction Risk App
            </p>
          </div>

          <div>
            <p className="text-gray-400">Role</p>
            <p className="text-green-400 text-lg font-semibold">
              Full Stack Engineer
            </p>
          </div>
        </div>

        <button className="mt-10 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold">
          Enter the Stadium
        </button>
      </motion.div>
    </section>
  );
}

export default HeroScoreboard;
