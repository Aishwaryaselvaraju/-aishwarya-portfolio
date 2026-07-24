import { useEffect, useRef } from "react";
import { certifications } from "../data/portfolioData";
import { RiExpandDiagonalLine, RiVerifiedBadgeFill } from "react-icons/ri";

export default function Certifications() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stagger-item").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 100);
        });
      }
    }, { threshold: 0.12 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="section" ref={ref}>
      <div className="section-container">
        <div className="section-header stagger-item">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Click a credential to open the certificate.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <button
              key={cert.title}
              type="button"
              onClick={() => window.open(cert.file, "_blank", "noopener,noreferrer")}
              className="group stagger-item card p-4 sm:p-6 text-left cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.16)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]"
              aria-label={`Open ${cert.title} certificate`}
            >
              <div className="flex justify-between gap-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: `${cert.color}18` }}>
                  {cert.icon}
                </div>
                <RiExpandDiagonalLine className="text-[var(--text-muted)] transition group-hover:text-[var(--primary)]" size={17} />
              </div>
              <div className="flex items-center gap-1.5 mb-2">
                <RiVerifiedBadgeFill size={14} style={{ color: cert.color }} />
                <span className="text-[11px] font-semibold" style={{ color: cert.color }}>Verified Credential</span>
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-0.5">{cert.title}</h3>
              <p className="text-xs font-semibold text-[var(--primary)] mb-3">{cert.issuer}</p>
              <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">{cert.description}</p>
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}
