import { useEffect, useRef } from "react";
import { RiDownloadFill, RiArrowRightSLine, RiLinkedinFill, RiGithubFill, RiMailFill, RiBehanceFill, RiDribbbleFill } from "react-icons/ri";
import { personalInfo } from "../data/portfolioData";

const iconMap = {
  RiLinkedinFill: RiLinkedinFill,
  RiGithubFill: RiGithubFill,
  RiBehanceFill: RiBehanceFill,
  RiDribbbleFill: RiDribbbleFill,
  RiMailFill: RiMailFill,
};

export default function Hero() {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const initials = personalInfo.initials || personalInfo.fullName.split(" ").map(n => n[0]).join("");

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" ref={ref}>
      {/* Background decoration — refined */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[15%] -left-40 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/5 blur-[100px]" />
        <div className="absolute bottom-[20%] -right-40 w-[500px] h-[500px] rounded-full bg-[var(--accent)]/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--primary)]/[0.03] blur-[120px]" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full py-24 md:py-0">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Avatar */}
          <div className="stagger-item shrink-0 order-1 md:order-2">
            <div className="relative">
              <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-[var(--primary)] via-[var(--primary-light)] to-[var(--accent)] p-[3px] shadow-xl shadow-[var(--primary)]/20">
                <div className="w-full h-full rounded-full bg-[var(--bg-primary)] flex items-center justify-center overflow-hidden">
                  <span className="text-5xl sm:text-6xl font-extrabold gradient-text select-none">
                    {initials}
                  </span>
                </div>
              </div>
              {/* Floating decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-[var(--primary)]/10 float" style={{ animationDelay: "0s" }} />
              <div className="absolute -inset-8 rounded-full border border-[var(--accent)]/8 float" style={{ animationDelay: "1s" }} />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1 order-2 md:order-1">
            <div className="stagger-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary-subtle)] text-[var(--primary)] text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              UI/UX Designer & Data Analyst
            </div>

            <h1 className="stagger-item text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">{personalInfo.firstName}</span>
              <br />
              <span className="text-[var(--text-primary)]">{personalInfo.lastName}</span>
            </h1>

            <p className="stagger-item text-lg sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-xl mb-6">
              {personalInfo.tagline}
            </p>

            {/* Badges */}
            <div className="stagger-item flex flex-wrap justify-center md:justify-start gap-2 mb-8">
              <span className="px-3.5 py-1.5 rounded-xl bg-[var(--primary-subtle)] text-[var(--primary)] text-xs font-semibold border border-[var(--primary)]/15">
                Figma Expert
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] text-xs font-semibold border border-[var(--accent)]/15">
                UX Research
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] text-xs font-semibold border border-[var(--border-color)]">
                Data Analytics
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] text-xs font-semibold border border-[var(--border-color)]">
                Data Visualisation
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] text-xs font-semibold border border-[var(--border-color)]">
                {personalInfo.location.split(",")[0]}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="stagger-item flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm text-white shadow-lg shadow-[var(--primary)]/25 hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                }}
              >
                View Projects
                <RiArrowRightSLine size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={personalInfo.resumePath}
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm border-2 border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--primary)]/30 hover:bg-[var(--primary-subtle)] transition-all duration-300"
              >
                <RiDownloadFill size={16} />
                Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--primary-subtle)] hover:text-[var(--primary)] transition-all duration-300 border border-[var(--border-color)]"
              >
                Contact
              </button>
            </div>

            {/* Social */}
            <div className="stagger-item flex justify-center md:justify-start gap-2 mt-8">
              {personalInfo.socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] hover:text-[var(--primary)] hover:bg-[var(--primary-subtle)] border border-[var(--border-color)] hover:border-[var(--primary)]/20 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                    aria-label={s.label}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]">
        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-[var(--border-color)] flex justify-center">
          <div className="w-1 h-2.5 rounded-full bg-[var(--primary)] mt-1.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
