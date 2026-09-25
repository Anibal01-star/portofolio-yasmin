import React, { useState } from "react";
import { yasminProfile } from "../data/yasmin";
import { Mic2, Users, Calendar, MapPin, Sparkles } from "lucide-react";

export const Speaking: React.FC = () => {
  const [tab, setTab] = useState<"all" | "speaker" | "committee">("all");

  const items = yasminProfile.speakingAndEvents.filter((item) => {
    if (tab === "all") return true;
    return item.type === tab;
  });

  return (
    <section id="speaking" className="section-container speaking-section" aria-label="Speaking and Events Section">
      <div className="section-label-row">
        <span className="section-number">06</span>
        <span className="section-divider" />
        <span className="section-category">Discourse & Orchestration</span>
      </div>

      <div className="section-header-editorial speaking-header-flex">
        <div>
          <h2 className="section-display-heading">Speaking & Events</h2>
          <p className="section-subtext">
            Engagements in public speaking, mental health dissemination, and the
            executive direction of collegiate student programs.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="speaking-toggle-pill">
          <button
            onClick={() => setTab("all")}
            className={`speaking-toggle-btn ${tab === "all" ? "speaking-toggle-btn--active" : ""
              }`}
          >
            All Events
          </button>
          <button
            onClick={() => setTab("speaker")}
            className={`speaking-toggle-btn ${tab === "speaker" ? "speaking-toggle-btn--active" : ""
              }`}
          >
            <Mic2 size={14} />
            <span>Speaker</span>
          </button>
          <button
            onClick={() => setTab("committee")}
            className={`speaking-toggle-btn ${tab === "committee" ? "speaking-toggle-btn--active" : ""
              }`}
          >
            <Users size={14} />
            <span>Committee Chair</span>
          </button>
        </div>
      </div>

      {/* Grid of Interactive Cards */}
      <div className="speaking-cards-grid">
        {items.map((item, index) => (
          <article key={item.id} className="speaking-card">
            <div className="speaking-card-top">
              <span className="speaking-index">0{index + 1}</span>
              <span
                className={`speaking-badge ${item.type === "speaker"
                    ? "speaking-badge--speaker"
                    : "speaking-badge--committee"
                  }`}
              >
                {item.type === "speaker" ? (
                  <Mic2 size={13} className="badge-icon" />
                ) : (
                  <Users size={13} className="badge-icon" />
                )}
                <span>{item.roleBadge}</span>
              </span>
            </div>

            <h3 className="speaking-title">{item.title}</h3>

            <div className="speaking-meta-group">
              <div className="speaking-meta-row">
                <MapPin size={15} className="meta-icon" />
                <span className="meta-text">{item.eventOrOrg}</span>
              </div>
              {item.organizer && (
                <div className="speaking-meta-organizer">
                  {item.organizer}
                </div>
              )}
              <div className="speaking-meta-row">
                <Calendar size={15} className="meta-icon" />
                <span className="meta-text">{item.date}</span>
              </div>
            </div>

            {item.description && (
              <p className="speaking-description">{item.description}</p>
            )}

            <div className="speaking-card-accent-bar" />
          </article>
        ))}
      </div>

      {/* Standout Keynote Highlight */}
      <div className="speaking-highlight-box">
        <div className="highlight-tag">
          <Sparkles size={14} />
          <span>Featured Mental Health Discourse</span>
        </div>
        <h4 className="highlight-headline">
          Talkshow Mantra: Cultivating Emotional Safety in Academic Environments
        </h4>
        <p className="highlight-text">
          Delivered to literature students and faculty at Universitas Muhammadiyah Malang,
          focusing on dismantling stigma, active peer validation, and psychological resilience.
        </p>
      </div>
    </section>
  );
};
