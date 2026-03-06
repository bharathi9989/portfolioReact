import { useRef } from "react";

export default function Navbar() {
  const links = ["Home", "About", "Skills","Projects", "Contact"];

  function magnetic(e) {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    item.style.transform = `translate(${x * 0.25}px,${y * 0.25}px)`;
  }

  function reset(e) {
    e.currentTarget.style.transform = "translate(0,0)";
  }

  return (
    <nav className="navbar">
      <div className="logo">Velubharathi</div>

      <ul className="nav-links">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={`#${link.toLowerCase()}`}
              className="nav-item"
              onMouseMove={magnetic}
              onMouseLeave={reset}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
