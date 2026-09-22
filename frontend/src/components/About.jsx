import { useEffect, useRef } from "react";
import { patentContribution, personalInfo } from "../data/portfolioData";

function renderBio(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-bold text-[var(--primary)]">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

export default function About() {
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

  return (
    <section id="about" className="section" ref={ref}>
      <div className="section-container">
        <div className="section-header stagger-item">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate about crafting meaningful digital experiences</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-5 stagger-item">
            {personalInfo.bio.map((para, i) => (
              <p
                key={i}
                className="text-base sm:text-lg text-[var(--text-secondary)] leading-[1.75]"
              >
                {renderBio(para)}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="lg:col-span-2 stagger-item">
            <div className="grid grid-cols-2 gap-3">
              {personalInfo.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card p-5 text-center"
                >
                  <div className="text-2xl font-extrabold gradient-text mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-[var(--text-tertiary)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 card overflow-hidden border-[var(--primary)]/40 bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-card)] to-[var(--primary-subtle)] p-6 sm:p-8 stagger-item">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)]/10 px-3 py-1.5 text-xs font-bold text-[var(--primary)]">
                Patent Published · Govt. of India
              </span>
              <h3 className="mt-4 max-w-4xl text-xl sm:text-2xl font-extrabold leading-tight text-[var(--text-primary)]">
                {patentContribution.title}
              </h3>
            </div>
            <span className="rounded-lg border border-[var(--primary)]/30 px-3 py-1.5 font-mono text-xs text-[var(--primary)]">
              App No: {patentContribution.applicationNumber}
            </span>
          </div>

          <p className="max-w-4xl text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
            {patentContribution.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/50 p-4 sm:grid-cols-4">
            <div><p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">Publication Date</p><p className="mt-1 text-sm font-bold text-[var(--text-primary)]">{patentContribution.publicationDate}</p></div>
            <div><p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">Filing Date</p><p className="mt-1 text-sm font-bold text-[var(--text-primary)]">{patentContribution.filingDate}</p></div>
            <div><p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">Field of Invention</p><p className="mt-1 text-sm font-bold capitalize text-[var(--primary)]">{patentContribution.field}</p></div>
            <div><p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">Authority</p><p className="mt-1 text-sm font-bold text-[var(--text-primary)]">{patentContribution.authority}</p></div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[var(--border-color)] pt-5 text-sm text-[var(--text-secondary)]">
            <span className="font-bold text-[var(--text-primary)]">Contributors:</span>
            {patentContribution.inventors.map((inventor) => {
              const isMyName = inventor.replace(/\.$/, "") === "Aishwarya K. S";

              return (
                <span
                  key={inventor}
                  className={
                    isMyName
                      ? "inline-flex items-center rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-2.5 py-1 font-extrabold text-[var(--primary)] shadow-sm"
                      : ""
                  }
                >
                  {inventor}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
