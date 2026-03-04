function TrophyCabinet() {
  const trophies = [
    "Real-time Auction Platform",
    "Construction Risk Prediction App",
    "250+ Coding Problems Solved",
    "Full Stack MERN Developer",
  ];

  return (
    <section className="py-20 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Trophy Cabinet</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {trophies.map((t) => (
          <div
            key={t}
            className="bg-gray-900 border border-green-500/20 p-6 rounded-xl"
          >
            🏆 {t}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrophyCabinet;
    