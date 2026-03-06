import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

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

      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const links = ["home", "about", "projects", "skills", "contact"];

  return (
    <nav className="navbar">
      <div className="logo">Velubharathi</div>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={`nav-item ${active === link ? "active" : ""}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
