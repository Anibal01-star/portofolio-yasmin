import React, { useRef } from "react";
import { yasminProfile } from "../data/yasmin";
import { ArrowLeft, ArrowRight, Layers, Building2, CheckCircle2 } from "lucide-react";

export const Organizations: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="organizations" className="section-container organizations-section" aria-label="Organizations Section">
      <div className="section-label-row">
        <span className="section-number">05</span>
        <span className="section-divider" />
        <span className="section-category">Institutional Governance</span>
      </div>

      <div className="organizations-header-row">
        <div>
          <h2 className="section-display-heading">
            Organizational Archive
          </h2>
          <p className="section-subtext">
            An editorial registry of leadership posts, student representative councils,
            and specialized collegiate institutions.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="organizations-nav-arrows">
          <button
            onClick={() => handleScroll("left")}
            className="arrow-nav-btn"
            aria-label="Scroll left"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="arrow-nav-btn"
            aria-label="Scroll right"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Card Track */}
      <div
        ref={scrollContainerRef}
        className="organizations-scroll-track"
        tabIndex={0}
        aria-label="Organizations carousel"
      >
        {yasminProfile.organizations.map((org, index) => (
          <article key={org.id} className="org-archive-card">
            <div className="org-card-top-bar">
              <span className="org-index-badge">ARCHIVE // 0{index + 1}</span>
              <span className="org-tag-pill">{org.tag}</span>
            </div>

            <div className="org-monogram-circle">
              <Building2 size={24} className="org-monogram-icon" />
              <span className="org-shortname">{org.shortName}</span>
            </div>

            <h3 className="org-name-title">{org.name}</h3>

            <div className="org-role-period-wrap">
              <div className="org-role-name">{org.role}</div>
              <div className="org-period-date">{org.period}</div>
            </div>

            <p className="org-summary-text">{org.summary}</p>

            <div className="org-contributions-block">
              <div className="org-contributions-label">
                <Layers size={13} />
                <span>Contributions & Impact</span>
              </div>
              <ul className="org-contributions-list">
                {org.contributions.map((item, cIdx) => (
                  <li key={cIdx} className="org-contribution-item">
                    <CheckCircle2 size={13} className="contrib-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom hint for track interaction */}
      <div className="organizations-footer-hint">
        <span className="hint-line" />
        <span className="hint-text">Drag or scroll horizontally to inspect the archive</span>
        <span className="hint-line" />
      </div>
    </section>
  );
};
