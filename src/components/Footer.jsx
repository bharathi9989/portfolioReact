import React from "react";
import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent rounded-lg flex items-center justify-center">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold gradient-text">Dev.Portfolio</span>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm flex items-center gap-1">
          Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by{" "}
          <span className="text-gray-300 font-medium">Your Name</span> ©{" "}
          {new Date().getFullYear()}
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com/yourusername" },
            { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
            { icon: Mail, href: "mailto:your@email.com" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/5 hover:bg-primary-500/20 border border-white/10 hover:border-primary-500/40 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
