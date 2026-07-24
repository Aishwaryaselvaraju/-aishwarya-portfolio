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
import genAiCertificate from "../certificate/Gen AI.png";
import uxDesignCertificate from "../certificate/UX Design.png";
import relianceFoundationCertificate from "../certificate/Reliancefoundation.png";
import dataVisualizationCertificate from "../certificate/Data Visualization.png";

/* ------------------------------------------------------------------ */
/*  ALL PORTFOLIO DATA — single source of truth extracted from resume */
/* ------------------------------------------------------------------ */

export const personalInfo = {
  firstName: "Aishwarya",
  lastName: "Selvaraju",
  fullName: "Aishwarya Selvaraju",
  initials: "AS",
  title: "UI/UX Designer & Data Analyst",
  email: "aishwaryaselvaraju14@gmail.com",
  phone: "+91 8015712990",
  location: "Pudukkottai, Tamilnadu",
  languages: ["Tamil", "English"],
  linkedin: "https://www.linkedin.com/in/aishwarya1413",
  github: "https://github.com/aishwaryaselvaraju",
  behance: "https://www.behance.net/aishwaryaselvaraju",
  dribbble: "https://dribbble.com/aishwaryaselvaraju",
  resumePath: "/AishwaryaSelvaraju_Resume.pdf",
  tagline: "Designing intuitive digital experiences and turning data into clear, actionable stories.",
  bio: [
    "I am a **UI/UX Designer and Data Analyst** who pairs human-centered design with evidence-led problem solving. I create accessible digital experiences in **Figma** and turn complex datasets into clear, useful insights.",
    "Currently pursuing **B.Tech in Information Technology** at Anna University (BIT Campus, Trichy) with a CGPA of **8.2**. My technical foundation helps me move comfortably between research, interface design, data cleaning, and visualization.",
    "I am seeking opportunities to apply **design thinking and data analysis**, collaborate with cross-functional teams, and deliver products that are both delightful to use and measurable in impact.",
  ],
  stats: [
    { value: "12+", label: "Design Projects" },
    { value: "5+", label: "Design Tools" },
    { value: "8.2", label: "CGPA" },
    { value: "8+", label: "Data Projects" },
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
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe Photoshop", level: 78 },
      { name: "CorelDRAW", level: 80 },
      { name: "Canva", level: 90 },
      { name: "Inkscape", level: 70 },
      { name: "Balsamiq", level: 65 },
    ],
  },
  {
    title: "UI/UX Skills",
    skills: [
      { name: "Wireframing & Prototyping", level: 92 },
      { name: "Mobile UI Design", level: 88 },
      { name: "User Research", level: 78 },
      { name: "Information Architecture", level: 75 },
      { name: "Visual Design", level: 85 },
      { name: "Design Systems", level: 72 },
      { name: "Graphic Design", level: 72 },
      { name: "Logo Design", level: 72 },
    ],
  },
    {
    title: "Data Analysis",
    skills: [
      { name: "Python", level: 80 },
      { name: "Data Visualization", level: 85 },
      { name: "Excel", level: 80 },
      { name: "POWER BI", level: 75 },
      { name: "SQL", level: 70 },
      { name: "DAX", level: 65 },  
    ],
  },
  {
    title: "Web & Tech",
    skills: [
      { name: "Responsive Web Design", level: 80 },
      { name: "HTML5 / CSS3", level: 75 },
      { name: "JavaScript Basics", level: 60 },
      { name: "Bootstrap", level: 65 },
    ],
  },
  {
    title: "Soft Skills",
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
    role: "design",
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
    caseStudy: {
      problem: "People need a safety tool that can be used quickly in stressful moments without sacrificing privacy or clarity.",
      process: "Mapped the emergency journey, prioritised one-hand actions, and tested the hierarchy of the SOS, location, and trusted-contact flows.",
      solution: "A calm, accessible mobile interface that makes emergency actions, location sharing, and contact management immediately available.",
      outcome: "A focused four-screen concept that reduces decision-making at the moment a user needs help most.",
    },
    links: { figma: "#", github: "#" },
  },
  {
    title: "E-Commerce Mobile App — UX Redesign",
    role: "design",
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
    caseStudy: {
      problem: "Fashion shoppers were losing momentum between product discovery and checkout on mobile.",
      process: "Reviewed the existing journey, used card sorting to validate navigation, and iterated checkout CTAs through usability testing.",
      solution: "A simplified browsing and three-step checkout experience supported by a reusable mobile design system.",
      outcome: "The concept targets a 40% improvement in checkout completion by removing unnecessary steps and clarifying next actions.",
    },
    links: { figma: "#", dribbble: "#" },
  },
  {
    title: "Sales Analytics Dashboard — Data Viz",
    role: "analytics",
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
    caseStudy: {
      problem: "Business stakeholders needed to understand sales performance without manually combining reports from multiple levels of detail.",
      process: "Identified decision-critical KPIs, structured the dashboard from overview to transaction detail, and designed visual hierarchy for fast scanning.",
      solution: "An interactive dashboard with filters, drill-down views, KPI trends, and export-ready summaries.",
      outcome: "A 12-widget concept that makes complex sales patterns easier to explore and communicate in stakeholder reviews.",
    },
    links: { figma: "#", behance: "#" },
  },
  {
    title: "Food Delivery App — UX Case Study",
    role: "design",
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
    caseStudy: {
      problem: "Returning customers faced too much friction when placing familiar food orders.",
      process: "Interviewed 25+ users, synthesised personas, mapped the ordering journey, and completed three rounds of prototype testing.",
      solution: "A streamlined food discovery and reorder experience with live order tracking and clearer decision points.",
      outcome: "The redesigned reorder flow cuts the journey from six taps to two for returning customers.",
    },
    links: { figma: "#", behance: "#" },
  },
  {
    title: "Poster & Social Media Design System",
    role: "design",
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
    caseStudy: {
      problem: "Campaign teams needed to publish frequent social content without losing visual consistency.",
      process: "Defined reusable layout rules, typography, colour tokens, and content patterns around common campaign formats.",
      solution: "A flexible template library for posts, posters, infographics, and promotional assets.",
      outcome: "The system supports consistent visual communication while reducing new-design turnaround by 60%.",
    },
    links: { behance: "#", dribbble: "#" },
  },
  {
    title: "Fitness Tracker App — Mobile UI",
    role: "design",
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
    caseStudy: {
      problem: "Fitness tracking can feel fragmented and unmotivating when workouts, progress, and social accountability live in separate places.",
      process: "Organised core user tasks into a progressive mobile flow and explored motivation patterns through streaks, milestones, and simple visual feedback.",
      solution: "A unified fitness companion that combines planning, activity logging, progress analytics, and community motivation.",
      outcome: "A cohesive 15-screen prototype that gives users one clear home for their fitness routine.",
    },
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
    file: genAiCertificate,
  },
  {
    title: "Data Science Essentials",
    issuer: "Reliance Foundation Skilling Academy",
    icon: "📊",
    color: "#f59e0b",
    description: "Foundational knowledge in data science methodologies, statistical analysis, and data-driven decision making for product design.",
    file: relianceFoundationCertificate,
  },
  {
    title: "Data Visualisation",
    issuer: "Tata Group",
    icon: "📈",
    color: "#10b981",
    description: "Skills in visualizing complex datasets, creating meaningful dashboards, and communicating design insights through data.",
    file: dataVisualizationCertificate,
  },
  {
    title: "Google UX Design Foundations",
    issuer: "Google Career Certificates",
    icon: "🎨",
    color: "#ec4899",
    description: "Foundations in user-centred design, empathy mapping, wireframing, and usability testing.",
    file: uxDesignCertificate,
  },
  {
    title: "Python for Data Analysis",
    issuer: "Online Learning Certificate",
    icon: "🐍",
    color: "#8b5cf6",
    description: "Applied Python skills for data cleaning, exploratory analysis, and communicating findings.",
    file: "/certificate-placeholder.svg",
  },
  {
    title: "Fundamentals of Data Visualisation",
    issuer: "Professional Development Certificate",
    icon: "📊",
    color: "#14b8a6",
    description: "Principles for selecting effective charts and building clear, decision-ready visual stories.",
    file: "/certificate-placeholder.svg",
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
