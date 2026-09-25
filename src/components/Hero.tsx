import React from "react";
import { SylvaHero as SylvaHeroBase } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";
import { yasminProfile } from "../data/yasmin";

// Type cast: the published @designcodeio/threeui type defs may lag behind the
// actual runtime API. SylvaHero accepts `variant` at runtime; we widen the
// prop type here so tsc does not reject it on Vercel's clean install.
const SylvaHero = SylvaHeroBase as React.ComponentType<{
  variant?: "living-green" | "sakura-sunset" | "maple-autumn" | "sequoia-mist";
  headingFont?: string;
  bodyFont?: string;
  headingWeight?: string;
  bodyWeight?: string;
  primaryColor?: string;
  headingSize?: number;
  bodySize?: number;
  headingLetterSpacing?: number;
  className?: string;
  style?: React.CSSProperties;
}>;

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Section">
      {/* 3D SylvaHero Living Green Scene Canvas Frame */}
      <div className="shader-frame" aria-hidden="false">
        <SylvaHero
          variant="living-green"
          headingFont="lexend"
          bodyFont="lexend"
          headingWeight="300"
          bodyWeight="300"
          primaryColor="#ffffff"
          headingSize={63}
          bodySize={16.5}
          headingLetterSpacing={-0.006}
        />
      </div>

      {/* Floating Editorial Psychology Overlay */}
      <div className="hero-editorial-overlay">
        <div className="hero-editorial-top">
          <div className="hero-badge">
            <span className="badge-sparkle">
              <Sparkles size={13} />
            </span>
            <span className="badge-text">Psychology Student & Peer Counselor</span>
          </div>
          <div className="hero-location-tag">
            UIN Maulana Malik Ibrahim Malang
          </div>
        </div>

        <div className="hero-editorial-center">
          <div className="hero-editorial-card">
            <div className="hero-card-meta">
              <span className="hero-meta-name">{yasminProfile.name}</span>
              <span className="hero-meta-divider">/</span>
              <span className="hero-meta-sub">Editorial Portfolio</span>
            </div>

            <h1 className="hero-display-statement">
              Understanding people.
              <br />
              <span className="hero-statement-italic">Creating space to be heard.</span>
            </h1>

            <p className="hero-editorial-lead">
              {yasminProfile.heroSubtext}
            </p>

            <div className="hero-identity-tags">
              {yasminProfile.primaryIdentity.map((tag, idx) => (
                <span key={idx} className="hero-identity-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="hero-cta-group">
              <button
                onClick={() => scrollTo("about")}
                className="hero-btn-primary"
                aria-label="Explore Portfolio"
              >
                <span>Explore Portfolio</span>
                <ArrowDown size={15} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="hero-btn-secondary"
                aria-label="Contact Yasmin"
              >
                <MessageCircle size={15} />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom indicator & transition anchor */}
        <div className="hero-editorial-bottom">
          <button
            onClick={() => scrollTo("about")}
            className="hero-scroll-cue"
            aria-label="Scroll to about section"
          >
            <span className="scroll-cue-text">Scroll to read</span>
            <span className="scroll-cue-line" />
          </button>
        </div>
      </div>

      {/* Atmospheric transition veil into warm stone psychology palette */}
      <div className="hero-transition-gradient" />
    </section>
  );
};
