import React, { useState } from "react";
import { yasminProfile } from "../data/yasmin";
import { Mail, Globe, Share2, ArrowUpRight, Copy, Check, MessageSquare } from "lucide-react";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(yasminProfile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-container contact-section" aria-label="Contact Section">
      <div className="section-label-row">
        <span className="section-number">08</span>
        <span className="section-divider" />
        <span className="section-category">Conclusion & Dialogue</span>
      </div>

      <div className="contact-editorial-card">
        <div className="contact-card-inner">
          <div className="contact-kicker">
            <MessageSquare size={16} />
            <span>Open for Collaboration</span>
          </div>

          <h2 className="contact-main-heading">
            {yasminProfile.contact.heading}
          </h2>

          <p className="contact-subtext">
            {yasminProfile.contact.subheading}
          </p>

          {/* Interactive CTA & Copy Button */}
          <div className="contact-actions-wrap">
            <a
              href={`mailto:${yasminProfile.contact.email}`}
              className="contact-primary-btn"
              aria-label="Send an email to Yasmin"
            >
              <span>{yasminProfile.contact.cta}</span>
              <ArrowUpRight size={18} />
            </a>

            <button
              onClick={copyEmail}
              className="contact-copy-btn"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-green" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social and Communication Links */}
          <div className="contact-channels-grid">
            <div className="channel-box">
              <div className="channel-header">
                <Mail size={18} className="channel-icon" />
                <span className="channel-title">Direct Mail</span>
              </div>
              <a
                href={`mailto:${yasminProfile.contact.email}`}
                className="channel-link"
              >
                <span>{yasminProfile.contact.email}</span>
                <span className="channel-placeholder-badge">Template Placeholder</span>
              </a>
            </div>

            <div className="channel-box">
              <div className="channel-header">
                <Globe size={18} className="channel-icon" />
                <span className="channel-title">LinkedIn Network</span>
              </div>
              <a
                href={yasminProfile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link"
              >
                <span>linkedin.com/in/yasmin-psychology</span>
                <span className="channel-placeholder-badge">Template Placeholder</span>
              </a>
            </div>

            <div className="channel-box">
              <div className="channel-header">
                <Share2 size={18} className="channel-icon" />
                <span className="channel-title">Instagram Updates</span>
              </div>
              <a
                href={yasminProfile.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link"
              >
                <span>instagram.com/yasmin.psych</span>
                <span className="channel-placeholder-badge">Template Placeholder</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
