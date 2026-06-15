import {
  RiLinkedinFill,
  RiMailFill,
  RiPhoneFill,
  RiMapPinFill,
  RiGithubFill,
  RiGlobalFill,
  RiStarFill,
  RiBehanceFill,
  RiDribbbleFill,
} from "react-icons/ri";

/* ------------------------------------------------------------------ */
/*  ALL PORTFOLIO DATA — single source of truth extracted from resume */
/* ------------------------------------------------------------------ */

export const personalInfo = {
  firstName: "Aishwarya",
  lastName: "Selvaraju",
  fullName: "Aishwarya Selvaraju",
  initials: "AS",
  title: "UI/UX Designer | UX Research Enthusiast | Figma Designer",
  email: "aishwaryaselvaraju14@gmail.com",
  phone: "+91 8015712990",
  location: "Pudukkottai, Tamilnadu",
  languages: ["Tamil", "English"],
  linkedin: "https://www.linkedin.com/in/aishwarya1413",
  github: "https://github.com/aishwaryaselvaraju",
  behance: "https://www.behance.net/aishwaryaselvaraju",
  dribbble: "https://dribbble.com/aishwaryaselvaraju",
  resumePath: "/AishwaryaSelvaraju_Resume.pdf",
  tagline: "Crafting intuitive, human-centered digital experiences through design thinking and research.",
  bio: [
    "UI/UX **Designer** passionate about crafting intuitive and accessible digital experiences. Proficient in **Figma**, wireframing, prototyping, and mobile UI design with a strong foundation in design thinking and user research.",
    "Currently pursuing **B.Tech in Information Technology** at Anna University (BIT Campus, Trichy) with a CGPA of **8.2**. Combining technical knowledge with design expertise to build solutions that are both functional and delightful.",
    "Seeking opportunities to apply **design thinking**, collaborate with cross-functional teams, and grow as a UX professional while delivering meaningful impact through human-centered design.",
  ],
  stats: [
    { value: "12+", label: "Design Projects" },
    { value: "5+", label: "Design Tools" },
    { value: "8.2", label: "CGPA" },
    { value: "4", label: "Internships" },
  ],
  socialLinks: [
    { icon: RiLinkedinFill, url: "https://www.linkedin.com/in/aishwarya1413", label: "LinkedIn" },
    { icon: RiGithubFill, url: "https://github.com/aishwaryaselvaraju", label: "GitHub" },
    { icon: RiBehanceFill, url: "https://www.behance.net/aishwaryaselvaraju", label: "Behance" },
    { icon: RiMailFill, url: "mailto:aishwaryaselvaraju14@gmail.com", label: "Email" },
  ],
};

/* ------------------------------------------------------------------ */
/*  SKILLS                                                             */
/* ------------------------------------------------------------------ */

export const skillCategories = [
  {
    title: "Design Tools",
    icon: "🎨",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe Photoshop", level: 78 },
      { name: "CorelDRAW", level: 80 },
      { name: "Canva", level: 90 },
      { name: "Inkscape", level: 70 },
    ],
  },
  {
    title: "UI/UX Skills",
    icon: "🖌️",
    skills: [
      { name: "Wireframing & Prototyping", level: 92 },
      { name: "Mobile UI Design", level: 88 },
      { name: "User Research", level: 78 },
      { name: "Information Architecture", level: 75 },
      { name: "Visual Design", level: 85 },
      { name: "Design Systems", level: 72 },
    ],
  },
  {
    title: "Web & Tech",
    icon: "💻",
    skills: [
      { name: "Responsive Web Design", level: 80 },
      { name: "HTML5 / CSS3", level: 75 },
      { name: "JavaScript Basics", level: 60 },
      { name: "Data Analysis", level: 65 },
    ],
  },
  {
    title: "Soft Skills",
    icon: "🌟",
    skills: [
      { name: "Design Thinking", level: 90 },
      { name: "Collaboration", level: 88 },
      { name: "Problem Solving", level: 85 },
      { name: "Adaptability", level: 85 },
      { name: "Communication", level: 80 },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                         */
/* ------------------------------------------------------------------ */

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Ibee Analytics",
    location: "Hyderabad",
    period: "Sep 2025 – Nov 2025",
    type: "experience",
    impact: "30+",
    impactLabel: "Marketing Creatives",
    description: [
      "Designed **30+ marketing creatives** including posters, infographics, and promotional videos, improving brand visibility across digital channels.",
      "Redesigned website UI layouts, **reducing bounce rate** and improving navigation flow for better user engagement.",
      "Collaborated with cross-functional teams on **5+ digital marketing campaigns**, translating client requirements into compelling visual designs.",
    ],
    tags: ["Figma", "Canva", "UI Design", "Brand Design"],
    color: "#6366f1",
  },
];

export const internships = [
  {
    role: "Web Developer Intern",
    company: "Hapus Infotech",
    location: "Coimbatore",
    period: "Jul – Aug 2025",
    type: "internship",
    impact: "3",
    impactLabel: "Web Pages Built",
    description: [
      "Developed **3 responsive web pages** with cross-browser compatibility, ensuring seamless experience across all device sizes.",
      "Optimized website structure and usability, **improving page load speed** through clean code practices.",
    ],
    tags: ["Web Development", "Responsive Design", "HTML/CSS"],
    color: "#f59e0b",
  },
  {
    role: "Cyber Forensic Intern",
    company: "Xenclavis",
    location: "Remote",
    period: "Apr – May 2025",
    type: "internship",
    impact: "10+",
    impactLabel: "Case Simulations",
    description: [
      "Participated in **10+ cyber crime investigation workshops**, gaining hands-on experience in digital forensics tools and methodologies.",
      "Developed analytical thinking skills through structured digital investigation scenarios and incident response simulations.",
    ],
    tags: ["Security", "Digital Forensics", "Analysis"],
    color: "#10b981",
  },
  {
    role: "Data Science Intern",
    company: "Big Learn",
    location: "Tiruchirappalli",
    period: "Jan – Feb 2025",
    type: "internship",
    impact: "8",
    impactLabel: "Analysis Projects",
    description: [
      "Completed **8 data analysis projects**, applying statistical methods to extract actionable insights from structured datasets.",
      "Adapted quickly to technical workflows, mastering data cleaning, visualization, and interpretation within a fast-paced learning environment.",
    ],
    tags: ["Data Analysis", "Python", "Visualization"],
    color: "#8b5cf6",
  },
];

/* ------------------------------------------------------------------ */
/*  PROJECTS — UI/UX focused portfolio                                 */
/* ------------------------------------------------------------------ */

export const projects = [
  {
    title: "Women Safety App — Mobile UI",
    description:
      "End-to-end mobile interface design for a women's safety application featuring emergency response, location tracking, and trusted contact management with a calming, accessible design system.",
    tags: ["Mobile App", "Figma", "Prototyping", "UI Design"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
    impact: "4",
    impactLabel: "Core Screens",
    features: [
      "Emergency SOS trigger with instant alert to trusted contacts and authorities",
      "Real-time location sharing with geofencing alerts",
      "Calming lavender-toned color palette designed for emotional safety",
      "Large touch targets and voice-command support for accessibility",
      "Onboarding flow with clear user guidance and privacy controls",
    ],
    links: { figma: "#", github: "#" },
  },
  {
    title: "E-Commerce Mobile App — UX Redesign",
    description:
      "Full UX redesign of a fashion e-commerce app focusing on checkout flow optimization, product discovery, and seamless browsing experience across mobile devices.",
    tags: ["Mobile App", "UX Research", "Figma", "Design System"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    impact: "40%",
    impactLabel: "Checkout Improvement",
    features: [
      "Streamlined 3-step checkout reducing cart abandonment by an estimated 40%",
      "AI-powered product recommendation carousel based on browsing history",
      "Unified design system with 60+ reusable components and variants",
      "User-tested navigation with card sorting and A/B tested CTAs",
      "Dark mode support with automatic theme detection",
    ],
    links: { figma: "#", dribbble: "#" },
  },
  {
    title: "Sales Analytics Dashboard — Data Viz",
    description:
      "Designed a comprehensive analytics dashboard for business intelligence, transforming complex sales data into intuitive visualizations with drill-down capabilities and real-time filtering.",
    tags: ["Dashboard", "Data Viz", "UX Design", "Prototyping"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    impact: "12",
    impactLabel: "Widgets Designed",
    features: [
      "12 customizable data widgets with drag-and-drop layout configuration",
      "Real-time KPI tracking with sparkline trend indicators",
      "Multi-level drill-down from summary to transaction-level detail",
      "Responsive grid adapting from mobile to 4K desktop displays",
      "Export-ready dashboard views for stakeholder presentations",
    ],
    links: { figma: "#", behance: "#" },
  },
  {
    title: "Food Delivery App — UX Case Study",
    description:
      "Complete UX case study for a food delivery platform including user interviews, competitive analysis, wireframes, and high-fidelity prototypes with a focus on reducing order friction.",
    tags: ["UX Research", "Mobile App", "Figma", "Case Study"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    impact: "25+",
    impactLabel: "User Interviews",
    features: [
      "Conducted 25+ user interviews and synthesised findings into 5 key personas",
      "Rapid iterative prototyping with 3 rounds of usability testing",
      "Reorder flow reduced from 6 taps to 2 taps for returning customers",
      "Real-time order tracking with live map integration",
      "Comprehensive 30-page UX case study documenting the full design process",
    ],
    links: { figma: "#", behance: "#" },
  },
  {
    title: "Poster & Social Media Design System",
    description:
      "Developed a cohesive visual identity and design system for social media campaigns including posters, infographics, and promotional materials applying typography and color theory.",
    tags: ["Graphic Design", "Branding", "Canva", "Typography"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    impact: "20+",
    impactLabel: "Design Templates",
    features: [
      "Created 20+ reusable social media templates ensuring brand consistency",
      "Applied Gestalt principles for visual hierarchy in poster layouts",
      "Designed infographics converting complex data into scannable visuals",
      "Consistent color palette and typography system across all platforms",
      "Template library reducing new design turnaround by 60%",
    ],
    links: { behance: "#", dribbble: "#" },
  },
  {
    title: "Fitness Tracker App — Mobile UI",
    description:
      "Designed a holistic fitness companion app with workout tracking, nutrition logging, progress visualization, and social accountability features in a clean, motivating interface.",
    tags: ["Mobile App", "Figma", "Prototyping", "UI Design"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",
    impact: "15",
    impactLabel: "Screens Designed",
    features: [
      "15 high-fidelity screens covering onboarding, workout logs, and analytics",
      "Gamified progress tracking with achievement badges and streaks",
      "Custom workout builder with drag-and-drop exercise sequencing",
      "Animated exercise demonstrations with pose reference overlays",
      "Social feed for sharing workouts and motivating friends",
    ],
    links: { figma: "#", dribbble: "#" },
  },
];

/* ------------------------------------------------------------------ */
/*  CERTIFICATIONS                                                     */
/* ------------------------------------------------------------------ */

export const certifications = [
  {
    title: "Generative AI in Action",
    issuer: "Industry Certification",
    icon: "🤖",
    color: "#6366f1",
    description: "Practical understanding of generative AI tools and their application in design workflows and creative problem-solving.",
  },
  {
    title: "Data Science Essentials",
    issuer: "Reliance Foundation Skilling Academy",
    icon: "📊",
    color: "#f59e0b",
    description: "Foundational knowledge in data science methodologies, statistical analysis, and data-driven decision making for product design.",
  },
  {
    title: "Data Visualisation",
    issuer: "Tata Group",
    icon: "📈",
    color: "#10b981",
    description: "Skills in visualizing complex datasets, creating meaningful dashboards, and communicating design insights through data.",
  },
];

/* ------------------------------------------------------------------ */
/*  EDUCATION                                                          */
/* ------------------------------------------------------------------ */

export const education = [
  {
    degree: "B.Tech – Information Technology",
    school: "University College of Engineering BIT Campus, Anna University",
    location: "Tiruchirappalli",
    period: "Nov 2022 – May 2026",
    score: "CGPA: 8.2 / 10",
    icon: "🎓",
    highlights: [
      "Active participation in design and tech events and hackathons",
      "Strong academic performance with consistent 8.2 CGPA",
      "Combined technical engineering curriculum with design specialisation",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  ACHIEVEMENTS                                                       */
/* ------------------------------------------------------------------ */

export const achievements = [
  {
    title: "6+ Design Projects Delivered",
    description: "Designed and prototyped multiple end-to-end UI/UX projects including mobile apps, dashboards, and brand identity systems with real-world application focus.",
    icon: "🎯",
    color: "#6366f1",
  },
  {
    title: "4 Internships Across Domains",
    description: "Completed internships in software engineering, web development, cyber forensics, and data science — demonstrating rapid learning and cross-domain versatility.",
    icon: "💼",
    color: "#f59e0b",
  },
  {
    title: "Strong Academic Foundation",
    description: "Maintained 8.2 CGPA in B.Tech Information Technology at Anna University while balancing internships, projects, and design portfolio development.",
    icon: "📚",
    color: "#ec4899",
  },
  {
    title: "Cross-Functional Collaborator",
    description: "Worked with engineering, marketing, and client teams across multiple internships — translating stakeholder requirements into impactful visual solutions.",
    icon: "🤝",
    color: "#10b981",
  },
];

/* ------------------------------------------------------------------ */
/*  NAVIGATION LINKS                                                   */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
