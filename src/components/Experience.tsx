import React, { useState } from "react";
import { yasminProfile, type ExperienceItem } from "../data/yasmin";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Roles" },
    { id: "counseling", label: "Counseling" },
    { id: "leadership", label: "Leadership" },
    { id: "advocacy", label: "Advocacy" },
    { id: "development", label: "Development" },
  ];

  const filteredExperiences = yasminProfile.experience.filter((item: ExperienceItem) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section id="experience" className="section-container experience-section" aria-label="Experience Section">
      <div className="section-label-row">
        <span className="section-number">04</span>
        <span className="section-divider" />
        <span className="section-category">Professional Trajectory</span>
      </div>

      <div className="section-header-editorial experience-header-flex">
        <div>
          <h2 className="section-display-heading">Experience</h2>
          <p className="section-subtext">
            A comprehensive record of peer counseling, human resource management,
            student advocacy, and institutional stewardship.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="experience-filter-bar">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`filter-chip ${filter === c.id ? "filter-chip--active" : ""
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Timeline Track */}
      <div className="experience-timeline-container">
        <div className="timeline-spine-line" />

        <div className="experience-timeline-list">
          {filteredExperiences.map((exp, index) => (
            <article key={exp.id} className="timeline-card-wrapper">
              <div className="timeline-node-pin">
                <span className="node-dot" />
              </div>

              <div className="timeline-card">
                <div className="timeline-card-meta">
                  <div className="timeline-index-pill">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="timeline-period-badge">
                    <Calendar size={13} className="period-icon" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="timeline-card-head">
                  <h3 className="timeline-role-title">{exp.role}</h3>
                  <div className="timeline-org-row">
                    <Briefcase size={16} className="timeline-org-icon" />
                    <span className="timeline-org-name">{exp.organization}</span>
                  </div>
                  {exp.departmentOrDivision && (
                    <div className="timeline-division-tag">
                      {exp.departmentOrDivision}
                    </div>
                  )}
                </div>

                <div className="timeline-responsibilities">
                  <div className="responsibilities-label">Key Responsibilities:</div>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="responsibility-item">
                        <ChevronRight size={14} className="resp-bullet" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
