import React from "react";
import { yasminProfile } from "../data/yasmin";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-container education-section" aria-label="Education Section">
      <div className="section-label-row">
        <span className="section-number">02</span>
        <span className="section-divider" />
        <span className="section-category">Academic Formation</span>
      </div>

      <div className="section-header-editorial">
        <h2 className="section-display-heading">
          Scholarly Discipline & Foundations
        </h2>
        <p className="section-subtext">
          A dedicated trajectory integrating behavioral sciences, research methodology,
          and rigorous analytical inquiry.
        </p>
      </div>

      <div className="education-cards-grid">
        {yasminProfile.education.map((item, index) => (
          <article key={item.id} className="education-editorial-card">
            <div className="edu-card-top">
              <span className="edu-badge-index">0{index + 1}</span>
              <div className="edu-score-pill">
                <Award size={14} className="score-icon" />
                <span className="score-value">{item.gradeLabel}</span>
              </div>
            </div>

            <div className="edu-card-main">
              <div className="edu-degree-group">
                <span className="edu-degree-type">{item.period}</span>
                <h3 className="edu-degree-title">{item.degree}</h3>
              </div>

              <div className="edu-institution-box">
                <GraduationCap size={18} className="inst-icon" />
                <span className="inst-name">{item.institution}</span>
              </div>

              <p className="edu-note-text">{item.note}</p>
            </div>

            <div className="edu-card-footer">
              <div className="edu-check-item">
                <CheckCircle2 size={15} className="check-icon" />
                <span>Verified Academic Record</span>
              </div>
              <div className="edu-pill-accent">
                <BookOpen size={13} />
                <span>Academic Rigor</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Editorial Academic Note */}
      <div className="academic-standout-banner">
        <div className="standout-content">
          <span className="standout-kicker">Academic Philosophy</span>
          <p className="standout-quote">
            "High academic standards provide the theoretical ballast for responsible, ethical counseling practice."
          </p>
        </div>
        <div className="standout-score-showcase">
          <div className="score-big">3.85</div>
          <div className="score-big-sub">Cumulative GPA · Psychology</div>
        </div>
      </div>
    </section>
  );
};
