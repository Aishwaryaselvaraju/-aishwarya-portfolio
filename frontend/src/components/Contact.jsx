import { useState, useEffect, useRef } from "react";
import { personalInfo } from "../data/portfolioData";
import {
  RiSendPlaneFill,
  RiMailFill,
  RiPhoneFill,
  RiMapPinFill,
  RiLinkedinFill,
  RiGithubFill,
  RiBehanceFill,
  RiDribbbleFill,
  RiDownloadFill,
  RiCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

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

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(null), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      const mailBody = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${mailBody}`;
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    }
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const socialLinks = [
    { icon: RiLinkedinFill, url: personalInfo.linkedin, label: "LinkedIn", color: "#0077b5" },
    { icon: RiGithubFill, url: personalInfo.github, label: "GitHub", color: "#333" },
    { icon: RiBehanceFill, url: personalInfo.behance, label: "Behance", color: "#1769ff" },
    { icon: RiMailFill, url: `mailto:${personalInfo.email}`, label: "Email", color: "#ea4335" },
  ];

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="section-container">
        <div className="section-header stagger-item">
          <span className="section-label">Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project, opportunity, or just want to say hello? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-5 stagger-item">
            {/* Contact Details */}
            <div className="card p-6">
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--primary-subtle)] flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform">
                    <RiMailFill size={17} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-wide">Email</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--accent-subtle)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
                    <RiPhoneFill size={17} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-wide">Phone</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-500">
                    <RiMapPinFill size={17} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-wide">Location</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social + Resume */}
            <div className="card p-6">
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4">
                Find me online
              </h3>
              <div className="flex gap-2.5 mb-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] hover:text-white flex items-center justify-center border border-[var(--border-color)] transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                    style={{ hover: { backgroundColor: s.color } }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = s.color; e.currentTarget.style.borderColor = 'transparent'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.borderColor = ''; }}
                    aria-label={s.label}
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>

              <a
                href={personalInfo.resumePath}
                download
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-semibold text-sm text-white shadow-lg shadow-[var(--primary)]/25 hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}
              >
                <RiDownloadFill size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 stagger-item">
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-2xl text-sm bg-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] border ${
                      errors.name ? "border-red-300 dark:border-red-500" : "border-[var(--border-color)]"
                    } focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]/50 transition-all`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-2xl text-sm bg-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] border ${
                      errors.email ? "border-red-300 dark:border-red-500" : "border-[var(--border-color)]"
                    } focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]/50 transition-all`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={handleChange("subject")}
                  placeholder="What's this regarding?"
                  className="w-full px-4 py-3 rounded-2xl text-sm bg-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]/50 transition-all"
                />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Tell me about your project, opportunity, or just say hi..."
                  rows={5}
                  className={`w-full px-4 py-3 rounded-2xl text-sm bg-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] border ${
                    errors.message ? "border-red-300 dark:border-red-500" : "border-[var(--border-color)]"
                  } focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]/50 transition-all resize-none`}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  status === "loading"
                    ? "bg-[var(--bg-tertiary)] text-[var(--text-muted)] cursor-not-allowed"
                    : status === "success"
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                    : "text-white shadow-lg shadow-[var(--primary)]/25 hover:shadow-xl hover:shadow-[var(--primary)]/30 hover:scale-[1.01]"
                }`}
                style={
                  status === "loading" || status === "success"
                    ? {}
                    : { background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }
                }
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : status === "success" ? (
                  <span className="flex items-center gap-2">
                    <RiCheckLine size={18} />
                    Message Sent! I'll get back to you soon.
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <RiSendPlaneFill size={16} />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
