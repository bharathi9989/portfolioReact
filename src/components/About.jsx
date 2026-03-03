import React from "react";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "2+" },
  { label: "Tech Stack", value: "10+" },
  { label: "Role", value: "Full Stack" },
  { label: "Status", value: "Open" },
];

function About() {
  return (
    <section id="about" className="section-padding bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-3">
            01. about me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Avatar + Stats */}
          <div className="flex flex-col items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-56 h-56 rounded-2xl bg-gradient-to-br from-primary-500 to-accent p-1">
                <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                  <User className="w-24 h-24 text-primary-400" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-400">
                  Open to Work
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Full Stack Developer building{" "}
              <span className="gradient-text">end-to-end solutions</span>
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I'm a passionate Full Stack Developer with hands-on experience
              building complete web applications from scratch. I love
              architecting scalable systems, writing clean code, and delivering
              features that users love.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My expertise spans the entire stack — from crafting responsive UIs
              with React and Tailwind CSS to designing RESTful APIs with
              Node.js, Express, and working with both SQL (PostgreSQL) and NoSQL
              (MongoDB) databases.
            </p>

            <div className="space-y-3">
              {[
                { icon: MapPin, text: "Your City, Country" },
                {
                  icon: Briefcase,
                  text: "Full Stack Developer — Available for hire",
                },
                { icon: GraduationCap, text: "Your Degree, Your College" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-8 h-8 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary-400" />
                  </div>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
              >
                Get In Touch
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline"
              >
                See Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
