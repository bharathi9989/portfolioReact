import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-primary-400 text-sm font-medium">
            Available for opportunities
          </span>
        </div>

        {/* Greeting */}
        <p className="text-primary-400 font-mono text-lg mb-4 animate-fade-in">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-slide-up">
          <span className="text-white">VELUBHARATHI </span>
          <span className="gradient-text"> S</span>
        </h1>

        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-slide-up">
          <div className="h-px w-12 bg-primary-500/50" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
            Full Stack Developer
          </h2>
          <div className="h-px w-12 bg-primary-500/50" />
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
          I build scalable, end-to-end web applications — from pixel-perfect
          frontends to robust backend APIs. Specializing in the PERN stack with
          a passion for clean architecture.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
          <button
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary flex items-center gap-2 justify-center"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </button>
          <a
            href="/resume.pdf"
            download
            className="btn-outline flex items-center gap-2 justify-center"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 animate-fade-in">
          {[
            {
              icon: Github,
              href: "https://github.com/yourusername",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/yourusername",
              label: "LinkedIn",
            },
            { icon: Mail, href: "mailto:your@email.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 glass-card flex items-center justify-center hover:border-primary-500/50 hover:text-primary-400 text-gray-400 transition-all duration-300 hover:-translate-y-1"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-primary-400 transition-colors animate-float"
      >
        <span className="text-xs font-mono">scroll down</span>
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  );
}

export default Hero;
