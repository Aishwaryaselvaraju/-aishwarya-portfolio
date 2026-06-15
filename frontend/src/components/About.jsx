import { useEffect, useRef } from "react";
import { personalInfo } from "../data/portfolioData";

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
          <span className="section-label">About</span>
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

          {/* Stats & Quick Info */}
          <div className="lg:col-span-2 stagger-item">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
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

            {/* Quick Info */}
            <div className="card p-5">
              <h4 className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-[0.12em] mb-3">
                Quick Info
              </h4>
              <div className="space-y-2.5">
                {[
                  { label: "📍 Location", value: personalInfo.location },
                  { label: "📧 Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { label: "📞 Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-sm">{item.label.split(" ")[0]}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors truncate"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-[var(--text-primary)] truncate">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
