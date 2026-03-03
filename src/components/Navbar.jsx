import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-md border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-accent rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/30">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg gradient-text">Dev.Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-400 hover:text-primary-400 font-medium transition-colors duration-200 text-sm tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-yellow-400" />
            ) : (
              <Moon className="w-4 h-4 text-primary-400" />
            )}
          </button>
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-primary text-sm py-2 px-5"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-300 hover:text-primary-400 font-medium transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4" /> Light Mode
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" /> Dark Mode
              </>
            )}
          </button>
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-primary text-sm text-center"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
