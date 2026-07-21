import { useEffect, useRef, useState } from "react";
import { certifications } from "../data/portfolioData";
import { RiCloseLine, RiExpandDiagonalLine, RiVerifiedBadgeFill } from "react-icons/ri";

export default function Certifications() {
  const ref = useRef(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

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

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setSelectedCertificate(null);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="section" ref={ref}>
      <div className="section-container">
        <div className="section-header stagger-item">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Select a credential to preview the certificate.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <button
              key={cert.title}
              type="button"
              onClick={() => setSelectedCertificate(cert)}
              className="stagger-item card p-6 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]"
              aria-label={`Preview ${cert.title} certificate`}
            >
              <div className="flex justify-between gap-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: `${cert.color}18` }}>
                  {cert.icon}
                </div>
                <RiExpandDiagonalLine className="text-[var(--text-muted)]" size={17} />
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

      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${selectedCertificate.title} certificate preview`} onMouseDown={() => setSelectedCertificate(null)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-auto bg-[var(--bg-card)] shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
            <div className="sticky top-0 flex items-center justify-between gap-4 p-4 bg-[var(--bg-card)] border-b border-[var(--border-color)] z-10">
              <div><h3 className="font-bold text-[var(--text-primary)]">{selectedCertificate.title}</h3><p className="text-xs text-[var(--text-tertiary)]">{selectedCertificate.issuer}</p></div>
              <button type="button" onClick={() => setSelectedCertificate(null)} className="p-2 rounded-xl text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)]" aria-label="Close certificate preview"><RiCloseLine size={22} /></button>
            </div>
            <img src={selectedCertificate.file} alt={`Placeholder for ${selectedCertificate.title} certificate`} className="w-full h-auto bg-white" />
          </div>
        </div>
      )}
    </section>
  );
}
