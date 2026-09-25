import React from "react";
import { yasminProfile } from "../data/yasmin";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="portfolio-footer" aria-label="Footer">
      <div className="footer-inner-container">
        <div className="footer-identity-col">
          <div className="footer-brand-name">{yasminProfile.footer.name}</div>
          <p className="footer-brand-role">{yasminProfile.footer.role}</p>
        </div>

        <div className="footer-mid-col">
          <p className="footer-rights-text">
            © {new Date().getFullYear()} {yasminProfile.name}. {yasminProfile.footer.rights}
          </p>
        </div>

        <div className="footer-action-col">
          <button
            onClick={scrollToTop}
            className="footer-top-btn"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
