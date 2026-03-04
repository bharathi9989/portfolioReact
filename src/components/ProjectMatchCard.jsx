function ProjectMatchCard({ project }) {
  return (
    <div className="bg-gray-900 border border-green-500/20 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-green-400 mb-2">{project.title}</h3>

      <p className="text-gray-400 text-sm mb-4">Match: {project.description}</p>

      <p className="text-sm text-gray-300 mb-2">Role: {project.role}</p>

      <p className="text-sm text-gray-300 mb-4">
        Tech: {project.tech.join(", ")}
      </p>

      <ul className="text-sm text-gray-400 mb-4">
        {project.highlights.map((h) => (
          <li key={h}>✔ {h}</li>
        ))}
      </ul>

      <div className="flex gap-3">
        <button className="px-4 py-2 bg-green-500 rounded">Live Demo</button>

        <button className="px-4 py-2 border border-green-400 rounded">
          GitHub
        </button>
      </div>
    </div>
  );
}

export default ProjectMatchCard;
