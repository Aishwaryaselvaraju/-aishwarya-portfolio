import { useEffect, useRef, useState } from "react";
import { skillCategories } from "../data/portfolioData";

function SkillBar({ name, level, index }) {
  const [width, setWidth] = useState("0%");
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(`${level}%`), 200 + index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level, index]);

  return (
    <div ref={barRef} className="mb-3.5 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-[var(--text-primary)]">{name}</span>
        <span className="text-[11px] font-bold text-[var(--primary)]">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--bg-tertiary)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-[1200ms] ease-out"
          style={{
            width,
            background: 'linear-gradient(90deg, var(--primary), var(--primary-light))',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="section-container">
        <div className="section-header stagger-item">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">Technologies and abilities I bring to every project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="card p-6 sm:p-7 stagger-item">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[var(--primary-subtle)] flex items-center justify-center text-lg">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-[var(--text-primary)]">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
