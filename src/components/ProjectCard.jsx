import React from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

function ProjectCard({ project, index }) {
  const navigate = useNavigate();

  return (
    <div
      className={`glass-card overflow-hidden hover:border-primary-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10 group ${
        index % 2 === 0 ? "" : ""
      }`}
    >
      {/* Project Image / Banner */}
      <div
        className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-20 select-none">
            {project.emoji}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
            {project.category}
          </span>
        </div>
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-primary-500/80 text-white text-xs font-medium px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-primary-500/10 text-primary-400 border border-primary-500/20 px-2 py-1 rounded-md font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(`/project/${project.id}`)}
            className="flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors group/btn"
          >
            View Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
          <div className="flex-1" />
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-gray-300" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-primary-500/20 hover:bg-primary-500/40 rounded-lg flex items-center justify-center transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 text-primary-400" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
