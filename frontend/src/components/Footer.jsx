import { personalInfo } from "../data/portfolioData";
import { RiLinkedinFill, RiGithubFill, RiBehanceFill, RiDribbbleFill, RiArrowUpLine } from "react-icons/ri";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialIcons = [
    { icon: RiLinkedinFill, url: personalInfo.linkedin, label: "LinkedIn" },
    { icon: RiGithubFill, url: personalInfo.github, label: "GitHub" },
    { icon: RiBehanceFill, url: personalInfo.behance, label: "Behance" },
    { icon: RiDribbbleFill, url: personalInfo.dribbble, label: "Dribbble" },
  ].filter(s => s.url);

  return (
    <footer className="relative bg-[var(--bg-tertiary)] border-t border-[var(--border-color)]">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--primary)]/[0.03] blur-[80px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[var(--accent)]/[0.03] blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-extrabold gradient-text mb-1">
              {personalInfo.firstName} {personalInfo.lastName}
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              UI/UX Designer &mdash; Crafting meaningful digital experiences
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[var(--bg-card)] text-[var(--text-tertiary)] hover:text-[var(--primary)] hover:bg-[var(--primary-subtle)] border border-[var(--border-color)] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label={s.label}
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)] text-center sm:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[var(--text-tertiary)]">{personalInfo.firstName} {personalInfo.lastName}</span>
            . Crafted with <span className="text-red-400">&hearts;</span> using React &amp; Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-2xl text-[11px] font-semibold text-[var(--primary)] bg-[var(--primary-subtle)] hover:bg-[var(--primary)] hover:text-white transition-all duration-200"
          >
            <RiArrowUpLine size={14} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
