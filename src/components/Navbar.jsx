import { useEffect, useState } from "react";
import { TbSun, TbMoonStars, TbMenu2, TbX } from "react-icons/tb";
import { useTheme } from "../hooks/useTheme.jsx";
import "./Navbar.css";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#tech", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={handleLinkClick}>
            <span className="brand-mark">LD</span>
            <span className="brand-text">
              <span className="brand-name">Lokeshkumar D</span>
              <span className="brand-role">Full-Stack .NET Developer</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              className="btn btn-primary btn-small nav-cv"
              href="/Lokeshkumar_D_Software_Engineer_DotNet_Resume_2025.pdf"
              download
            >
              Download CV
            </a>
            <button
              className="theme-toggle"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <TbSun size={18} /> : <TbMoonStars size={18} />}
            </button>
            <button
              className="menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <TbX size={22} /> : <TbMenu2 size={22} />}
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary btn-small"
            href="/Lokeshkumar_D_DotNet_Developer_Resume.pdf"
            download
            onClick={handleLinkClick}
          >
            Download CV
          </a>
        </div>
      </header>
      {/* Reserves the nav's height in normal flow since the nav itself is now
          position: fixed (immune to any ancestor overflow/transform quirks
          that can silently break position: sticky). */}
      <div className="nav-spacer" aria-hidden="true" />
    </>
  );
}
