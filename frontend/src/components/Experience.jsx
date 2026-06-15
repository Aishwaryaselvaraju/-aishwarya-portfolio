import { useEffect, useRef } from "react";
import { experience, internships } from "../data/portfolioData";
import { RiCalendarLine, RiMapPinLine } from "react-icons/ri";

function TimelineItem({ item }) {
  return (
    <div className="relative pl-12 pb-10 last:pb-0 group stagger-item">
      {/* Timeline line */}
      <div className="absolute left-[19px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-[var(--primary)] via-[var(--primary-light)] to-transparent group-last:to-transparent opacity-30" />

      {/* Dot */}
      <div
        className="absolute left-0 top-1 w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg border-[3px] border-[var(--bg-primary)]"
        style={{ backgroundColor: item.color || "var(--primary)" }}
      >
        <span className="text-white text-xs font-black">
          {item.type === "experience" ? "W" : "I"}
        </span>
      </div>

      {/* Card */}
      <div className="card p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)]">{item.role}</h3>
            <p className="text-sm font-semibold text-[var(--primary)]">{item.company}</p>
          </div>
          <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)] shrink-0 flex-wrap">
            <span className="flex items-center gap-1.5">
              <RiCalendarLine size={13} />
              {item.period}
            </span>
            <span className="flex items-center gap-1.5">
              <RiMapPinLine size={13} />
              {item.location}
            </span>
          </div>
        </div>

        {/* Impact number */}
        {item.impact && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[var(--primary-subtle)] text-[var(--primary)] text-xs font-bold mb-4">
            <span className="text-lg">{item.impact}</span>
            <span className="font-medium">{item.impactLabel}</span>
          </div>
        )}

        {/* Description */}
        <ul className="space-y-2.5 mb-4">
          {item.description.map((desc, i) => (
            <li key={i} className="text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] opacity-50 shrink-0" />
              {renderBold(desc)}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[11px] font-semibold rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] border border-[var(--border-color)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function renderBold(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-semibold text-[var(--text-primary)]">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

export default function Experience() {
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
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="section-container max-w-4xl mx-auto">
        <div className="section-header stagger-item">
          <span className="section-label">Background</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Professional journey and internship highlights</p>
        </div>

        <div className="space-y-2">
          {/* Work Experience */}
          {experience.length > 0 && (
            <div className="mb-1">
              <h3 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-[0.12em] mb-5 pl-12">
                Work Experience
              </h3>
              {experience.map((item) => (
                <TimelineItem key={item.company + item.role} item={item} />
              ))}
            </div>
          )}

          {/* Internships */}
          {internships.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-[0.12em] mb-5 pl-12">
                Internships
              </h3>
              {internships.map((item) => (
                <TimelineItem key={item.company + item.role} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
