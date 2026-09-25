import React, { useState } from "react";
import { yasminProfile } from "../data/yasmin";
import { Sparkles, ShieldCheck, Heart, MessagesSquare, Check } from "lucide-react";

export const Counseling: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="counseling" className="section-container counseling-section" aria-label="Peer Counseling Section">
      <div className="section-label-row">
        <span className="section-number">03</span>
        <span className="section-divider" />
        <span className="section-category">Core Praxis</span>
      </div>

      <div className="section-header-editorial">
        <div className="counseling-header-tag">
          <Sparkles size={14} />
          <span>Specialized Field Experience</span>
        </div>
        <h2 className="section-display-heading">
          Peer Counseling
        </h2>
        <p className="section-subtext">
          Fostering empathetic, non-judgmental dialogue and preventive mental health
          literacy through structured student support systems.
        </p>
      </div>

      {/* Interactive Storytelling Layout */}
      <div className="counseling-interactive-grid">
        {/* Left Side: Editorial Tabs / Organization Selectors */}
        <div className="counseling-tabs-column">
          {yasminProfile.peerCounseling.map((item, idx) => {
            const isSelected = activeTab === idx;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`counseling-tab-card ${isSelected ? "counseling-tab-card--active" : ""
                  }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveTab(idx);
                }}
              >
                <div className="tab-card-header">
                  <span className="tab-card-period">{item.period}</span>
                  <span className="tab-card-tag">{item.theme}</span>
                </div>
                <h3 className="tab-card-org">{item.organization}</h3>
                <p className="tab-card-role">{item.role}</p>
                {item.parentOrg && (
                  <span className="tab-card-parent">{item.parentOrg}</span>
                )}
              </div>
            );
          })}

          {/* Psychology Ethics & Boundary Statement */}
          <div className="counseling-ethics-card">
            <div className="ethics-icon-row">
              <ShieldCheck size={20} className="ethics-icon" />
              <span className="ethics-label">Ethical Peer Support Code</span>
            </div>
            <p className="ethics-text">
              Committed to confidentiality, non-judgmental positive regard,
              empathic listening, and timely referral protocols without clinical overreach.
            </p>
          </div>
        </div>

        {/* Right Side: Deep Dive Focus on Selected Experience */}
        <div className="counseling-focus-panel">
          {(() => {
            const current = yasminProfile.peerCounseling[activeTab];
            return (
              <div className="focus-panel-inner" key={current.id}>
                <div className="focus-header">
                  <div className="focus-badge">
                    <Heart size={14} />
                    <span>Active Peer Support Role</span>
                  </div>
                  <span className="focus-timeline">{current.period}</span>
                </div>

                <h3 className="focus-title">{current.organization}</h3>
                <div className="focus-subtitle-wrap">
                  <span className="focus-role">{current.role}</span>
                  {current.parentOrg && (
                    <span className="focus-parent">· {current.parentOrg}</span>
                  )}
                </div>

                <div className="focus-responsibilities-title">
                  Key Counseling Facilitation & Practice:
                </div>

                <ul className="focus-highlights-list">
                  {current.highlights.map((h, i) => (
                    <li key={i} className="focus-highlight-item">
                      <span className="highlight-bullet">
                        <Check size={14} />
                      </span>
                      <span className="highlight-text">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="focus-interactive-footer">
                  <div className="focus-stat-item">
                    <MessagesSquare size={18} className="stat-icon" />
                    <div>
                      <div className="stat-val">Session Facilitation</div>
                      <div className="stat-desc">Empathetic peer consultations & structured debriefs</div>
                    </div>
                  </div>
                  <div className="focus-stat-item">
                    <ShieldCheck size={18} className="stat-icon" />
                    <div>
                      <div className="stat-val">Safe Space Culture</div>
                      <div className="stat-desc">Anti-stigma initiatives & psychosocial education</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Peer Counseling Competency Clusters */}
      <div className="counseling-clusters-grid">
        <div className="cluster-box">
          <span className="cluster-num">01</span>
          <h4 className="cluster-name">Active & Empathic Listening</h4>
          <p className="cluster-desc">
            Attuned reception to emotional undertones, unspoken hesitation, and cognitive patterns.
          </p>
        </div>
        <div className="cluster-box">
          <span className="cluster-num">02</span>
          <h4 className="cluster-name">Mental Health Content Creation</h4>
          <p className="cluster-desc">
            Transforming psychological insights into accessible, resonant public education campaigns.
          </p>
        </div>
        <div className="cluster-box">
          <span className="cluster-num">03</span>
          <h4 className="cluster-name">Community Facilitation</h4>
          <p className="cluster-desc">
            Leading reflective group activities, aspiration forums, and student developmental programs.
          </p>
        </div>
      </div>
    </section>
  );
};
