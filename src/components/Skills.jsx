import React from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 80 },
    ],
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "JWT Auth", level: 82 },
      { name: "React Router", level: 85 },
    ],
  },
  {
    title: "Database",
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "SQL", level: 82 },
      { name: "MongoDB", level: 78 },
    ],
  },
];

const tools = [
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "npm",
  "Vite",
  "Linux",
  "Figma",
];

function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-3">02. skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Technologies I use to build full-stack applications end-to-end
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card p-6 hover:border-primary-500/30 transition-all duration-300"
            >
              <div
                className={`inline-block bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-bold text-lg mb-6`}
              >
                {category.title}
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Other */}
        <div className="glass-card p-8">
          <h3 className="text-white font-semibold mb-6 text-center">
            Tools & Workflow
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-800 border border-gray-700 hover:border-primary-500/50 hover:text-primary-400 text-gray-300 rounded-lg text-sm font-medium transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
