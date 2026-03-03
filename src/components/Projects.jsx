import React from "react";
import ProjectCard from "./ProjectCard";

export const projectsData = [
  {
    id: "auction-platform",
    title: "Auction Bidding Platform",
    category: "Full Stack Web App",
    emoji: "🏆",
    description:
      "A real-time auction and bidding web application where users can create listings, place bids, and win items. Features live bid updates, secure authentication with JWT, and a complete payment workflow. Built end-to-end with a PostgreSQL backend and React frontend.",
    longDescription: `A comprehensive real-time auction platform built end-to-end. Users can register, browse active auctions, place competitive bids, and manage their own listings.

Key Features:
- Real-time bid updates using polling/websockets
- JWT-based authentication and authorization
- Auction creation with image upload, start price, end time
- Bidding system with automatic highest-bid tracking
- User dashboard — active bids, won auctions, listings
- Admin panel to moderate listings
- PostgreSQL for relational data integrity (users, auctions, bids)
- RESTful API with Express.js and Node.js`,
    tech: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "React Router",
    ],
    gradient: "from-amber-500 to-orange-600",
    featured: true,
    github: "https://github.com/yourusername/auction-platform",
    live: "",
    highlights: [
      "End-to-end real-time bidding logic",
      "JWT auth with role-based access control",
      "Relational data modeling in PostgreSQL",
      "RESTful API with 15+ endpoints",
    ],
  },
  {
    id: "construction-risk-predictor",
    title: "Construction Risk Predictor",
    category: "Full Stack Web App",
    emoji: "🏗️",
    description:
      "An end-to-end web application that predicts and assesses construction project risks using structured data inputs. Features a dynamic risk scoring engine, detailed reports, and a dashboard for project managers to monitor risk levels in real time.",
    longDescription: `A full-stack web application designed for construction project managers to predict and manage project risks before they escalate.

Key Features:
- Multi-factor risk assessment form (budget, timeline, team, site conditions)
- Risk scoring engine with weighted algorithms
- Dynamic dashboard showing risk breakdown by category
- Historical risk reports stored per project
- MongoDB for flexible project data storage
- Export reports as PDF
- Secure login for project managers
- RESTful API with Node.js and Express`,
    tech: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "React Router",
    ],
    gradient: "from-teal-500 to-cyan-600",
    featured: true,
    github: "https://github.com/yourusername/construction-risk-predictor",
    live: "",
    highlights: [
      "Custom risk scoring algorithm",
      "MongoDB schema for flexible project data",
      "Dynamic charts and visual dashboards",
      "Full authentication system",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-3">
            03. projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            End-to-end full stack applications I've designed, built, and
            deployed
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More Projects Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">More projects on GitHub</p>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
