import React, { useState } from "react";
import { yasminProfile } from "../data/yasmin";
import { Sparkles, HeartHandshake, MessageCircle, GitBranch, Check } from "lucide-react";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const icons: Record<string, React.ReactNode> = {
    COUNSELING: <HeartHandshake size={22} className="cat-icon" />,
    COMMUNICATION: <MessageCircle size={22} className="cat-icon" />,
    ORGANIZATION: <GitBranch size={22} className="cat-icon" />,
  };

  const displayedCategories =
    activeCategory === "ALL"
      ? yasminProfile.skills
      : yasminProfile.skills.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="section-container skills-section" aria-label="Skills Section">
      <div className="section-label-row">
        <span className="section-number">07</span>
        <span className="section-divider" />
        <span className="section-category">Competencies</span>
      </div>

      <div className="section-header-editorial skills-header-flex">
        <div>
          <h2 className="section-display-heading">Core Capabilities</h2>
          <p className="section-subtext">
            A balanced matrix of psychological empathy, structured verbal articulation,
            and organizational leadership methodologies.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="skills-filter-nav">
          <button
            onClick={() => setActiveCategory("ALL")}
            className={`skills-filter-btn ${activeCategory === "ALL" ? "skills-filter-btn--active" : ""
              }`}
          >
            All Areas
          </button>
          {yasminProfile.skills.map((c) => (
            <button
              key={c.category}
              onClick={() => setActiveCategory(c.category)}
              className={`skills-filter-btn ${activeCategory === c.category ? "skills-filter-btn--active" : ""
                }`}
            >
              {c.category}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Skill Clusters Grid */}
      <div className="skills-cluster-grid">
        {displayedCategories.map((cat) => (
          <div key={cat.category} className="skills-cluster-card">
            <div className="cluster-header">
              <div className="cluster-icon-wrapper">
                {icons[cat.category] || <Sparkles size={22} className="cat-icon" />}
              </div>
              <div className="cluster-title-wrap">
                <span className="cluster-category-tag">Discipline</span>
                <h3 className="cluster-category-title">{cat.category}</h3>
              </div>
            </div>

            <p className="cluster-description-text">{cat.description}</p>

            <div className="cluster-pills-wrap">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-interactive-pill">
                  <span className="pill-dot">
                    <Check size={12} />
                  </span>
                  <span className="pill-name">{skill}</span>
                </div>
              ))}
            </div>

            <div className="cluster-bottom-bar" />
          </div>
        ))}
      </div>

      {/* Qualitative Capability Assurance Statement */}
      <div className="skills-editorial-footnote">
        <Sparkles size={16} className="footnote-icon" />
        <p className="footnote-text">
          Capabilities are cultivated through continuous client-facing peer sessions,
          formal ma'had residential administration, and institutional faculty advocacy.
        </p>
      </div>
    </section>
  );
};
