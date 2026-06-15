import { useEffect, useRef } from "react";
import { certifications } from "../data/portfolioData";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function Certifications() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".stagger-item").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 100);
          });
        }
      },
      { threshold: 0.12 }
    );
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
          <p className="section-subtitle">Professional development and verified skills</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="stagger-item card p-6"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: `${cert.color}18` }}
              >
                {cert.icon}
              </div>

              <div className="flex items-center gap-1.5 mb-2">
                <RiVerifiedBadgeFill size={14} style={{ color: cert.color }} />
                <span className="text-[11px] font-semibold" style={{ color: cert.color }}>
                  Verified Credential
                </span>
              </div>

              <h3 className="text-base font-bold text-[var(--text-primary)] mb-0.5">
                {cert.title}
              </h3>
              <p className="text-xs font-semibold text-[var(--primary)] mb-3">
                {cert.issuer}
              </p>
              <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
