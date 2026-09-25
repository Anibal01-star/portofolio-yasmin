import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "counseling", label: "Counseling" },
  { id: "experience", label: "Experience" },
  { id: "organizations", label: "Organizations" },
  { id: "speaking", label: "Speaking" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const scrollPosition = window.scrollY + 200;
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`portfolio-navbar ${
          isScrolled ? "portfolio-navbar--scrolled" : ""
        }`}
        aria-label="Main Navigation"
      >
        <div className="navbar-container">
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollToSection("hero")}
            className="navbar-brand"
            aria-label="Scroll to home"
          >
            <span className="brand-monogram">N</span>
            <span className="brand-text">
              <span className="brand-name">Yasmin</span>
              <span className="brand-role">Psychology & Counseling</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="navbar-desktop-nav" aria-label="Desktop menu">
            <ul className="nav-link-list">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="nav-link-item">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`nav-link-btn ${
                        isActive ? "nav-link-btn--active" : ""
                      }`}
                    >
                      {item.label}
                      {isActive && <span className="active-dot" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="navbar-actions">
            <button
              onClick={() => scrollToSection("contact")}
              className="navbar-cta-pill"
            >
              <span>Connect</span>
              <ArrowUpRight size={14} className="cta-icon" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="navbar-toggle-btn"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <div
        className={`mobile-menu-overlay ${
          mobileMenuOpen ? "mobile-menu-overlay--open" : ""
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <span className="brand-name">Yasmin</span>
            <span className="brand-role">Psychology Student · Peer Counselor</span>
          </div>

          <nav className="mobile-menu-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <li
                  key={item.id}
                  className="mobile-nav-item"
                  style={{ transitionDelay: `${index * 35}ms` }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`mobile-nav-btn ${
                      activeSection === item.id ? "mobile-nav-btn--active" : ""
                    }`}
                  >
                    <span className="mobile-nav-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mobile-nav-label">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu-footer">
            <button
              onClick={() => scrollToSection("contact")}
              className="mobile-cta-btn"
            >
              <span>Initiate Dialogue</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
