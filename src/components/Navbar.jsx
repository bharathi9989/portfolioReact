import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Certifications",
    "Projects",
    "Contact",
  ];

  function magnetic(e) {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    item.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  }

  function reset(e) {
    e.currentTarget.style.transform = "translate(0,0)";
  }

  return (
    <nav className="navbar">
      <div className="logo">VELUBHARATHI S</div>

      {/* Desktop Menu */}
      <ul className="nav-links hidden md:flex">
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

      {/* Mobile Button */}
      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.toLowerCase()}`}
                className="nav-item"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
