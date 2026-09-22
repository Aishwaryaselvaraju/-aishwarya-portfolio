import { useEffect, useRef } from "react";
import { certifications } from "../data/portfolioData";
import { RiExpandDiagonalLine, RiShieldCheckFill } from "react-icons/ri";

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
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Click a credential to open the certificate.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => {
            const Icon = cert.icon;

            return (
              <button
                key={cert.title}
                type="button"
                onClick={() => window.open(cert.file, "_blank", "noopener,noreferrer")}
                className="group stagger-item card p-4 sm:p-6 text-left cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[var(--primary)]/40 hover:bg-[var(--bg-card)]/90 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]"
                style={{
                  boxShadow: "0 10px 25px rgba(99, 102, 241, 0.08)",
                  transition: "all 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                }}
                aria-label={`Open ${cert.title} certificate`}
              >
                <div className="flex justify-between gap-3">
                  <div
                    className="icon-neon w-12 h-12 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${cert.color}18`,
                      color: cert.color,
                      boxShadow: `0 6px 18px ${cert.color}22`,
                      filter: "drop-shadow(0 0 10px rgba(99, 102, 241, 0.14))",
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <RiExpandDiagonalLine className="text-[var(--text-muted)] transition group-hover:text-[var(--primary)]" size={17} />
                </div>

                <div
                  className="inline-flex items-center gap-1.5 mb-3 rounded-full bg-[var(--bg-tertiary)] px-2 py-1 border border-[var(--border-color)] transition-all duration-300 group-hover:brightness-110"
                  style={{
                    boxShadow: `0 4px 12px ${cert.color}20`,
                    filter: "drop-shadow(0 0 10px rgba(99, 102, 241, 0.10))",
                  }}
                >
                  <RiShieldCheckFill size={12} style={{ color: cert.color }} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: cert.color }}>
                    Verified
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--text-primary)] mb-0.5">{cert.title}</h3>
                <p className="text-xs font-semibold text-[var(--primary)] mb-3">{cert.issuer}</p>
                <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">{cert.description}</p>
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}
