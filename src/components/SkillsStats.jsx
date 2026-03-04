function SkillsStats() {
  const skills = {
    Batting: ["React", "JavaScript", "Tailwind"],
    Bowling: ["Node.js", "Express", "MongoDB"],
    Fielding: ["Git", "Docker", "Postman"],
  };

  return (
    <section className="py-20 bg-gray-950 text-white">
      <h2 className="text-3xl text-center font-bold mb-10">
        Player Statistics
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {Object.entries(skills).map(([category, list]) => (
          <div
            key={category}
            className="bg-gray-900 border border-green-500/20 p-6 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-green-400 mb-4">
              {category}
            </h3>

            {list.map((skill) => (
              <p key={skill} className="text-gray-300 mb-2">
                {skill}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsStats;
