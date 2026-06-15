import { useState, useEffect } from "react";
import { RiSunFill, RiMoonFill, RiMenuFill, RiCloseFill } from "react-icons/ri";
import { navLinks, personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="text-xl sm:text-2xl font-extrabold gradient-text hover:scale-105 transition-transform"
          >
            Aishwarya KS
            <span className="text-[var(--primary)]">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-[var(--primary)] bg-[var(--primary-subtle)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-subtle)]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="w-px h-6 bg-[var(--border-color)] mx-2" />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-subtle)] transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <RiSunFill size={17} /> : <RiMoonFill size={17} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-subtle)] transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <RiSunFill size={17} /> : <RiMoonFill size={17} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-subtle)] transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <RiCloseFill size={20} /> : <RiMenuFill size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-400 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px" }}
      >
        <div className="h-full glass flex flex-col items-center justify-start gap-1 pt-10 px-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`w-full max-w-xs py-3.5 px-5 rounded-2xl text-center text-base font-medium transition-all ${
                activeSection === link.href.slice(1)
                  ? "text-[var(--primary)] bg-[var(--primary-subtle)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-subtle)]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
