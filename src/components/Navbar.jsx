import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  const linkClass = (id) => `nav-link ${active === id ? "active" : ""}`;

  return (
    <nav className="navbar">
      <div className="logo">Velubharathi</div>

      <div className="nav-links">
        <a href="#hero" className={linkClass("hero")}>
          Home
        </a>

        <a href="#about" className={linkClass("about")}>
          About
        </a>

        <a href="#projects" className={linkClass("projects")}>
          Projects
        </a>

        <a href="#skills" className={linkClass("skills")}>
          Skills
        </a>

        <a href="#contact" className={linkClass("contact")}>
          Contact
        </a>
      </div>
    </nav>
  );
}
