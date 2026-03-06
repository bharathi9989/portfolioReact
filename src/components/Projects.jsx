export default function Projects() {
  const projects = [
    {
      name: "Auction Platform",
      role: "Full Stack Developer",
      stack: "React / Node / MongoDB",
      result: "Real Time Bidding System",
    },

    {
      name: "Construction Risk Prediction",
      role: "Full Stack Developer",
      stack: "Python / ML / React",
      result: "Prediction Model",
    },
  ];

  return (
    <section className="bg-gray-900 py-24 text-white">
      <h2 className="text-center text-4xl font-bold mb-16">Match Scorecards</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-black border border-green-500 p-8 rounded-xl"
          >
            <h3 className="text-2xl text-green-400 mb-4">{p.name}</h3>

            <p>Role: {p.role}</p>
            <p>Tech: {p.stack}</p>
            <p className="mt-3 text-yellow-400">Result: {p.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
