import { useEffect, useRef } from "react";
import { projects } from "../data/portfolioData";
import { RiExternalLinkLine, RiGithubLine, RiBehanceLine, RiDribbbleLine, RiFigmaLine } from "react-icons/ri";

const tagStyles = {
  "Mobile App": "bg-[var(--primary-subtle)] text-[var(--primary)]",
  "Figma": "bg-[var(--accent-subtle)] text-[var(--accent)]",
  "Prototyping": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300",
  "UX Research": "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-300",
  "Design System": "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-300",
  "Dashboard": "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300",
  "Data Viz": "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-300",
  "UX Design": "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-300",
  "UI Design": "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-300",
  "Graphic Design": "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300",
  "Branding": "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300",
  "Canva": "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-300",
  "Typography": "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-300",
  "Case Study": "bg-slate-50 dark:bg-slate-900/20 text-slate-600 dark:text-slate-300",
};

export default function Projects() {
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
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="section-container">
        <div className="section-header stagger-item">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Selected design work showcasing my process and craft</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="stagger-item group card overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    if (!e.target.dataset.fallback) {
                      e.target.dataset.fallback = "true";
                      e.target.src = "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Impact badge on image */}
                {project.impact && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-[var(--bg-card)]/90 backdrop-blur-sm shadow-md">
                    <span className="text-base font-extrabold text-[var(--primary)]">{project.impact}</span>
                    <span className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide">{project.impactLabel}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-lg ${
                        tagStyles[tag] || "bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <ul className="space-y-1.5 mb-4">
                    {project.features.slice(0, 3).map((feat, j) => (
                      <li key={j} className="text-xs text-[var(--text-tertiary)] flex items-start gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-[var(--primary)] shrink-0" />
                        {feat}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-[var(--primary)] font-medium ml-4">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                )}

                {/* Links */}
                <div className="flex gap-3 pt-2 border-t border-[var(--border-color)]">
                  {project.links.figma && (
                    <a href={project.links.figma} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-[var(--primary)] hover:underline">
                      <RiFigmaLine size={14} /> Figma
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-tertiary)] hover:text-[var(--primary)] transition-colors">
                      <RiGithubLine size={14} /> GitHub
                    </a>
                  )}
                  {project.links.behance && (
                    <a href={project.links.behance} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-[var(--primary)] hover:underline">
                      <RiBehanceLine size={14} /> Behance
                    </a>
                  )}
                  {project.links.dribbble && (
                    <a href={project.links.dribbble} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline">
                      <RiDribbbleLine size={14} /> Dribbble
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
