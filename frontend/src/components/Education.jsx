import { useEffect, useRef } from "react";
import { education } from "../data/portfolioData";
import { RiCalendarLine, RiMapPinLine } from "react-icons/ri";

export default function Education() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".stagger-item").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 120);
          });
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (education.length === 0) return null;

  return (
    <section id="education" className="section" ref={ref}>
      <div className="section-container max-w-4xl mx-auto">
        <div className="section-header stagger-item">
          <span className="section-label">Academics</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background and qualifications</p>
        </div>

        {education.map((edu) => (
          <div key={edu.degree} className="stagger-item card p-6 sm:p-8 overflow-hidden relative">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Icon */}
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-3xl shadow-lg shadow-[var(--primary)]/20">
                  {edu.icon}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--primary)]">
                      {edu.school}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-[var(--primary-subtle)] text-[var(--primary)] text-xs font-bold">
                    {edu.score}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-xs text-[var(--text-tertiary)]">
                  <span className="flex items-center gap-1.5">
                    <RiCalendarLine size={13} />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <RiMapPinLine size={13} />
                    {edu.location}
                  </span>
                </div>

                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
