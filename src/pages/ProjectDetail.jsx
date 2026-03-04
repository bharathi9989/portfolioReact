import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, CheckCircle } from "lucide-react";


function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Project not found
          </h2>
          <button onClick={() => navigate("/")} className="btn-primary">
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        {/* Hero Banner */}
        <div
          className={`h-64 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-10 relative overflow-hidden`}
        >
          <span className="text-9xl opacity-20 select-none">
            {project.emoji}
          </span>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-6 left-8">
            <span className="bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
              {project.category}
            </span>
          </div>
        </div>

        {/* Title & Links */}
        <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {project.title}
          </h1>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn-outline text-sm py-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn-primary text-sm py-2"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-sm bg-primary-500/10 text-primary-400 border border-primary-500/20 px-3 py-1.5 rounded-lg font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">
            About the Project
          </h2>
          <div className="text-gray-400 leading-relaxed whitespace-pre-line text-sm">
            {project.longDescription}
          </div>
        </div>

        {/* Key Highlights */}
        {project.highlights && (
          <div className="glass-card p-8">
            <h2 className="text-xl font-bold text-white mb-6">
              Key Highlights
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
