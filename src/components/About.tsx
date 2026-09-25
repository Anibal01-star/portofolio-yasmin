import React from "react";
import { yasminProfile } from "../data/yasmin";
import { HeartHandshake, Mic, Users, Compass } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="section-container about-section" aria-label="About Section">
      {/* Editorial Section Header */}
      <div className="section-label-row">
        <span className="section-number">01</span>
        <span className="section-divider" />
        <span className="section-category">Perspective & Ethos</span>
      </div>

      <div className="about-layout-grid">
        {/* Left Column: Large Editorial Statement */}
        <div className="about-col-left">
          <h2 className="about-hero-heading">
            {yasminProfile.about.mainStatement}
          </h2>

          <div className="about-meta-chips">
            {yasminProfile.about.meta.map((item, idx) => (
              <div key={idx} className="about-meta-chip">
                <span className="meta-chip-label">{item.label}</span>
                <span className="meta-chip-val">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Editorial Bio Breakdown & Pillars */}
        <div className="about-col-right">
          <div className="about-prose-block">
            <p className="about-prose-lead">
              I am a Psychology student at{" "}
              <strong className="text-highlight">
                Universitas Islam Negeri Maulana Malik Ibrahim Malang
              </strong>
              , experienced in organizational development and peer counseling.
            </p>
            <p className="about-prose-body">
              Equipped with knowledge in peer counseling, public speaking, and
              mental health. Comfortable working individually and collaboratively,
              disciplined, and able to actively contribute to social and educational
              programs.
            </p>
          </div>

          {/* Three Conceptual Pillars */}
          <div className="about-pillars-grid">
            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <HeartHandshake size={20} className="pillar-icon" />
              </div>
              <h3 className="pillar-title">Empathic Presence</h3>
              <p className="pillar-desc">
                Cultivating safe, stigma-free peer counseling sessions rooted in
                active listening and emotional validation.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <Mic size={20} className="pillar-icon" />
              </div>
              <h3 className="pillar-title">Public Discourse</h3>
              <p className="pillar-desc">
                Facilitating workshops and public speaking forums to make
                psychological literacy intuitive and practical.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <Users size={20} className="pillar-icon" />
              </div>
              <h3 className="pillar-title">Stewardship</h3>
              <p className="pillar-desc">
                Applying organizational psychology principles to member
                development, student advocacy, and community leadership.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Quote Bar */}
      <div className="about-quote-ribbon">
        <Compass size={18} className="quote-ribbon-icon" />
        <span className="quote-ribbon-text">
          “Psychology is not merely a subject of inquiry—it is the practice of holding space for human dignity and resilience.”
        </span>
      </div>
    </section>
  );
};
