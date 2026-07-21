import { useEffect, useRef, useState } from "react";
import { projects } from "../data/portfolioData";
import { RiArrowRightLine, RiCloseLine, RiExternalLinkLine, RiFigmaLine, RiGithubLine } from "react-icons/ri";

const tagStyles = {
  "Mobile App": "bg-[var(--primary-subtle)] text-[var(--primary)]", Figma: "bg-[var(--accent-subtle)] text-[var(--accent)]",
  Prototyping: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300", "UX Research": "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-300",
  Dashboard: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300", "Data Viz": "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-300",
  "UI Design": "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-300", "Graphic Design": "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300",
};

const filters = [{ id: "all", label: "All projects" }, { id: "design", label: "UI/UX Design" }, { id: "analytics", label: "Data Analytics" }];
const externalLinks = (project) => Object.entries(project.links || {}).filter(([, url]) => url && url !== "#");

export default function Projects() {
  const ref = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = projects.filter((project) => activeFilter === "all" || project.role === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.querySelectorAll(".stagger-item").forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 100));
    }, { threshold: 0.06 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  if (projects.length === 0) return null;
  return (
    <section id="projects" className="section" ref={ref}>
      <div className="section-container">
        <div className="section-header stagger-item">
          <span className="section-label">Portfolio</span><h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Browse case studies across UI/UX design and data analytics.</p>
        </div>
        <div className="stagger-item flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Filter projects by discipline">
          {filters.map((filter) => <button key={filter.id} type="button" role="tab" aria-selected={activeFilter === filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${activeFilter === filter.id ? "bg-[var(--primary)] text-white" : "bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] hover:text-[var(--primary)]"}`}>{filter.label}</button>)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {visibleProjects.map((project) => (
            <article key={project.title} className="group card overflow-hidden">
              <button type="button" onClick={() => setSelectedProject(project)} className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--primary)]">
                <div className="relative overflow-hidden aspect-[16/10]"><img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-[var(--bg-card)]/90 text-xs font-bold text-[var(--primary)]">{project.impact} <span className="font-medium text-[var(--text-tertiary)]">{project.impactLabel}</span></div>
                </div>
                <div className="p-5 sm:p-6"><div className="flex flex-wrap gap-1.5 mb-3">{project.tags.map((tag) => <span key={tag} className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-lg ${tagStyles[tag] || "bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]"}`}>{tag}</span>)}</div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent)] mb-2">{project.role === "analytics" ? "Data Analytics" : "UI/UX Design"}</p><h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{project.title}</h3><p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.description}</p>
                </div>
              </button>
              <div className="flex items-center justify-between gap-3 px-5 pb-5 sm:px-6 sm:pb-6"><button type="button" onClick={() => setSelectedProject(project)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:underline">View case study <RiArrowRightLine /></button><button type="button" onClick={() => setSelectedProject(project)} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-tertiary)] hover:text-[var(--primary)]"><RiGithubLine size={15} /> Project links</button></div>
            </article>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}

function ProjectDetail({ project, onClose }) {
  const links = externalLinks(project);
  return <div className="fixed inset-0 z-50 p-4 sm:p-8 overflow-y-auto bg-slate-950/75 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${project.title} case study`} onMouseDown={onClose}>
    <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-[var(--bg-card)] shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
      <button type="button" onClick={onClose} className="absolute z-10 top-4 right-4 p-2 rounded-xl bg-[var(--bg-card)]/90 text-[var(--text-primary)] shadow-md hover:bg-[var(--bg-tertiary)]" aria-label="Close case study"><RiCloseLine size={22} /></button>
      <img src={project.image} alt="" className="w-full max-h-80 object-cover" />
      <div className="p-6 sm:p-10"><p className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-2">{project.role === "analytics" ? "Data Analytics case study" : "UI/UX Design case study"}</p><h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-3">{project.title}</h2><p className="text-[var(--text-secondary)] leading-relaxed mb-8">{project.description}</p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">{Object.entries(project.caseStudy || {}).map(([heading, copy]) => <div key={heading} className="rounded-xl p-5 bg-[var(--bg-tertiary)]"><h3 className="capitalize text-sm font-bold text-[var(--primary)] mb-2">{heading}</h3><p className="text-sm text-[var(--text-secondary)] leading-relaxed">{copy}</p></div>)}</div>
        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Full feature list</h3><ul className="grid sm:grid-cols-2 gap-3 mb-8">{project.features.map((feature) => <li key={feature} className="flex gap-2 text-sm text-[var(--text-secondary)]"><span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-[var(--primary)]" />{feature}</li>)}</ul>
        <div className="flex flex-wrap gap-3 pt-6 border-t border-[var(--border-color)]">{links.length ? links.map(([type, url]) => <a key={type} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--primary-subtle)] text-[var(--primary)] text-sm font-semibold hover:opacity-80">{type === "github" ? <RiGithubLine /> : <RiFigmaLine />}{type} <RiExternalLinkLine size={15} /></a>) : <p className="text-sm text-[var(--text-tertiary)]">Project link coming soon.</p>}</div>
      </div>
    </div>
  </div>;
}
