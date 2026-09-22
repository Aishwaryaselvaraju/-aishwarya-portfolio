import {
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";
import genAiCertificate from "../certificate/Gen AI.png";
import uxDesignCertificate from "../certificate/UX Design.png";
import relianceFoundationCertificate from "../certificate/Reliancefoundation.png";
import dataVisualizationCertificate from "../certificate/Data Visualization.png";
import pythonCertificate from "../certificate/python.png";
import dataAnalysisCertificate from "../certificate/DA.png";

//adding images for projects

import ecomImage from "../image/Ecom.png";
import electionImage from "../image/Election.jpeg";
import herSafeImage from "../image/hersafe.png";
import cartoImage from "../image/carto.png";
import foodImage from "../image/food.png";
import fitnessImage from "../image/fitness.png";
import posterImage from "../image/poster.png";
import instagramDashboardImage from "../image/Instagram Dashboard.jpeg";
import hrImage from "../image/HR.jpeg";
import financialImage from "../image/fin.png";
import spendingImage from "../image/spend.jpeg";
import salesProfitImage from "../image/s&p.jpeg";
import salesImage from "../image/sales.jpeg";
import globalSalesImage from "../image/global.jpeg";



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
  resumePath: "/AishwaryaSelvaraju_Resume.pdf",
  tagline: "Designing intuitive digital experiences and turning data into clear, actionable stories.",
  bio: [
    "I am a ** Data Analyst & UI/UX Designer ** who pairs human-centered design with evidence-led problem solving. I create accessible digital experiences in **Figma** and turn complex datasets into clear, useful insights.",
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
   ],
};

/* ------------------------------------------------------------------ */
/*  SKILLS                                                             */
/* ------------------------------------------------------------------ */

export const skillCategories = [

    {
    title: "Data Analysis",
    skills: [
      { name: "Python", level: 80 },
      { name: "Data Visualization", level: 85 },
      { name: "Excel", level: 80 },
      { name: "POWER BI", level: 75 },
      { name: "SQL", level: 70 },
      { name: "DAX", level: 65 },
      { name: "Tableau", level: 50 },
    ],
  },

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
];

export const internships = [
 
  {
    role: "Data Analysis Intern",
    company: "novi Tech Research & Development",
    location: "Coimbatore",
    period: "Jun – july 2026",
    type: "internship",
    impact: "5+",
    impactLabel: "Dashboards Developed",
    description: [
      "Developed **5+ responsive dashboards** using Power BI and Excel, enabling stakeholders to visualize key metrics and trends effectively.",
    ],
    tags: ["Excel", "PowerBI", "python", "Data Visualization", "SQL"],
    color: "#0bf517",
  },

   {
    role: "Software Engineer Intern",
    company: "Ibee Analytics",
    location: "Hyderabad",
    period: "Sep 2025 – Nov 2025",
    type: "internship",
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
    title: "E-Commerce Sales Dashboard",
    role: "analytics",
    summary: "A Power BI dashboard for tracking online sales, orders, customers, products, and revenue trends.",
    description: "Developed a Power BI dashboard to analyze e-commerce sales performance and customer ordering patterns.",
    tags: ["Power BI", "E-Commerce", "Sales Analytics", "Dashboard"],
    image: ecomImage,
    imageFit: "contain",
    impact: "4",
    impactLabel: "Sales Views",
    features: ["Sales and order KPIs", "Customer and product analysis", "Monthly revenue trends", "Category performance breakdown", "Interactive date and region filters"],
    caseStudy: {
      problem: "E-commerce teams need one view of orders, revenue, customers, and products to monitor business performance.",
      process: "Prepared order data and created Power BI visuals and measures for sales, customers, products, and time-based comparisons.",
      solution: "A sales dashboard that brings core e-commerce metrics into one interactive reporting view.",
      outcome: "The dashboard supports quick monitoring of sales trends and product performance.",
    },
    links: { github: "https://github.com/Aishwaryaselvaraju/PowerBi_Ecommerce-sales-Dashboard" },
  },
  {
    title: "Indian Elections Analytics Dashboard",
    role: "analytics",
    summary: "A Power BI dashboard for exploring Indian election results, parties, states, seats, and voting patterns.",
    description: "Created a Power BI dashboard to present Indian election results through state, party, seat, and vote analysis.",
    tags: ["Power BI", "Political Analytics", "Data Visualization", "Dashboard"],
    image: electionImage,
    imageFit: "contain",
    impact: "543",
    impactLabel: "Seats Analyzed",
    features: ["State-wise result analysis", "Party seat comparisons", "Vote share KPIs", "Interactive state and party filters", "Election trend visualizations"],
    caseStudy: {
      problem: "Election results contain many dimensions that are difficult to compare in raw tables.",
      process: "Structured the election data and designed Power BI views for states, parties, seats, votes, and result comparisons.",
      solution: "An interactive dashboard that presents election outcomes through clear KPIs and comparative visuals.",
      outcome: "The dashboard makes election data easier to filter, compare, and understand.",
    },
    links: { github: "https://github.com/Aishwaryaselvaraju/powerBi_State-wise-Constituency-Analysis" },
  },
  
  {
    title: "HerSafe — Women Safety App",
    role: "design",
    summary: "A mobile safety app focused on emergency SOS, trusted contacts, and location sharing.",
    description:
      "Designed a mobile safety app focused on emergency SOS, trusted contacts, and location sharing.",
    tags: ["Figma", "UI/UX", "Mobile App"],
    image: herSafeImage,
    impact: "Mobile",
    impactLabel: "UI Design",
    features: [
      "Emergency SOS",
      "Trusted contacts",
      "Location sharing",
      "Safety-focused interface",
    ],
    caseStudy: {
      problem: "People need a safety tool that can be used quickly in stressful moments without sacrificing privacy or clarity.",
      process: "Mapped the emergency journey, prioritised one-hand actions, and tested the hierarchy of the SOS, location, and trusted-contact flows.",
      solution: "A calm, accessible mobile interface that makes emergency actions, location sharing, and contact management immediately available.",
      outcome: "A focused four-screen concept that reduces decision-making at the moment a user needs help most.",
    },
    links: {
      figma: "https://www.figma.com/design/lDdbWuipX0QPJEtpNnUsUX/HerSafe?node-id=0-1&t=aMKPjNUsfs7e4vWv-1",
    },
  },
  {
    title: "Carto — E-Commerce Mobile App UI",
    role: "design",
    summary: "A mobile e-commerce interface focused on product discovery, browsing, and a smoother checkout flow.",
    description:
      "Designed a mobile e-commerce interface with clear product discovery, browsing, and checkout experiences.",
    tags: ["Figma", "UI/UX", "Mobile App"],
    image: cartoImage,
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
    links: {
      figma: "https://www.figma.com/design/ae2h1CZJJabdBuifPLi9NT/Ecommerce-website?node-id=0-1&t=MjHvlQU4Z5CJRzAw-1",
    },
  },
  
  {
    title: "Feasto — Food Delivery App UI",
    role: "design",
    summary: "A food delivery app UI designed to make restaurant discovery, ordering, and tracking feel simple.",
    description:
      "Designed a food delivery app interface with a focus on restaurant discovery, ordering, and live delivery tracking.",
    tags: ["Figma", "UI/UX", "Mobile App"],
    image: foodImage,
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
    links: {
      figma: "https://www.figma.com/design/Cl2r8kvhy5EgiZJFrdOs6w/Feasto---Food-app?t=TkCcy5falZrAYi6D-1",
    },
  },


  {
    title: "Fitora — Fitness App UI",
    role: "design",
    summary: "A fitness app UI for planning workouts, tracking progress, and building healthier daily routines.",
    description:
      "Designed a fitness app interface for workout planning, activity tracking, progress visualization, and motivation.",
    tags: ["Figma", "UI/UX", "Mobile App"],
    image: fitnessImage,
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
    links: {
      figma: "https://www.figma.com/design/sHSG0ADM7rpMGkDroNWJ3I/Fitora-Fitness-app?node-id=0-1&t=TkCcy5falZrAYi6D-1",
    },
  },
  

  {
    title: "Poster & Social Media Design and Video Editing",
    role: "design",
    summary: "During the internship at Ibee Analytics, I created a Canva collection of posters, social media designs, and edited video content for digital campaigns.",
    description:
      "Created posters, social media designs, and video edits for digital campaigns using Canva.",
    tags: ["Canva", "Graphic Design", "Video Editing"],
    image: posterImage,
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
    links: {
      github: "https://github.com/Aishwaryaselvaraju/Logo_design",  
      canva: [
        "https://canva.link/w209pl8l78ubec3",
        "https://canva.link/k0bqywiy2ins9m0",
        "https://canva.link/00to7pg2bvq769q",
        "https://canva.link/oei157fxp8aal44",
        "https://canva.link/2r532kcd6vbcf0v",
      ],
    },

  },

  {
    title: "Instagram Engagement Analytics Dashboard",
    role: "analytics",
    summary: "An Excel dashboard for comparing Instagram engagement, likes, and category-wise performance.",
    description: "Created an Excel dashboard to analyze Instagram engagement, likes, and category-wise content performance.",
    tags: ["Excel", "Data Analytics", "PivotTable", "PivotChart"],
    image: instagramDashboardImage,
    imageFit: "contain",
    impact: "2000",
    impactLabel: "Records Analyzed",
    features: [
      "Engagement and likes analysis",
      "Category-wise performance analysis",
      "KPI tracking for quick insights",
      "Interactive PivotTables and PivotCharts",
      "Comparison of engagement patterns across categories",
    ],
    caseStudy: {
      problem: "Raw Instagram data can be difficult to understand without a clear way to compare content performance.",
      process: "Cleaned the data and used Excel PivotTables and PivotCharts to analyze likes and engagement across different categories.",
      solution: "Created an interactive Excel dashboard to track KPIs and identify high-performing content categories.",
      outcome: "The dashboard helped present Instagram engagement data in a simple and visual format for easier analysis.",
    },
    links: {
      github: "https://github.com/Aishwaryaselvaraju/Excel_Instagram-Engagement-Analytics-Dashboard",
    },
  },
  {
    title: "HR Analytics Dashboard",
    role: "analytics",
    summary: "A Power BI dashboard for analyzing employee attrition, workforce trends, and department performance.",
    description: "Created a Power BI HR analytics dashboard to explore employee attrition and workforce patterns through interactive visuals.",
    tags: ["Power BI", "HR Analytics", "DAX", "Dashboard"],
    image: hrImage,
    imageFit: "contain",
    impact: "1,470",
    impactLabel: "Employee Records",
    features: ["Attrition rate KPI", "Department-wise analysis", "Employee demographic insights", "Interactive filters", "Workforce trend analysis"],
    caseStudy: {
      problem: "HR data can be difficult to interpret when attrition and workforce patterns are spread across different reports.",
      process: "Prepared employee data and created Power BI measures and visuals to compare attrition across departments and employee groups.",
      solution: "An interactive HR dashboard that combines workforce KPIs, department comparisons, and attrition analysis.",
      outcome: "The dashboard makes employee trends easier to explore and supports data-informed retention discussions.",
    },
    links: { github: "https://github.com/Aishwaryaselvaraju/PowerBi_HR-Analytics-Dashboard" },
  },
  {
    title: "Financial Analytics Dashboard",
    role: "analytics",
    summary: "A Power BI dashboard for tracking revenue, expenses, profit, and financial performance trends.",
    description: "Built a Power BI financial analytics dashboard to compare revenue, costs, profit, and monthly business performance.",
    tags: ["Power BI", "Financial Analytics", "DAX", "Dashboard"],
    image: financialImage,
    imageFit: "contain",
    impact: "12",
    impactLabel: "Financial KPIs",
    features: ["Revenue and expense tracking", "Profit margin analysis", "Monthly performance trends", "Interactive slicers and filters", "DAX-based KPI calculations"],
    caseStudy: {
      problem: "Financial data can be difficult to compare when revenue, expenses, and profit are spread across different reports.",
      process: "Prepared the financial data and created Power BI measures and visuals for revenue, costs, profit, and time-based comparisons.",
      solution: "An interactive Power BI dashboard that presents core financial KPIs, trends, and performance comparisons.",
      outcome: "The dashboard makes financial results easier to understand and supports faster performance reviews.",
    },
    links: { github: "https://github.com/Aishwaryaselvaraju/PowerBi_Financial-Analytical-dashboard" },
  },

  
  {
    title: "Personal Spending & Shopping Analysis Dashboard",
    role: "analytics",
    summary: "A Power BI dashboard for understanding personal spending, shopping categories, and purchase patterns.",
    description: "Built a Power BI dashboard to analyze personal spending habits, shopping categories, and changes in expenses.",
    tags: ["Power BI", "Personal Finance", "Data Analytics", "Dashboard"],
    image: spendingImage,
    imageFit: "contain",
    impact: "12",
    impactLabel: "Spending Insights",
    features: ["Category-wise spending analysis", "Monthly expense trends", "Shopping behavior breakdown", "KPI cards and filters", "Personal finance insights"],
    caseStudy: {
      problem: "Personal spending data can make it difficult to understand where money is going and how habits change over time.",
      process: "Organized transaction data and created Power BI measures and visuals to compare spending by category, time, and purchase type.",
      solution: "A personal finance dashboard that presents spending patterns through clear KPIs and interactive comparisons.",
      outcome: "The dashboard provides a simple visual view of shopping behavior and expense distribution.",
    },
    links: { github: "https://github.com/Aishwaryaselvaraju/PowerBi_Personal-Spending-Shopping-Analysis-Dashboard" },
  },
  {
    title: "Sales & Profit Performance Analysis",
    role: "analytics",
    summary: "A Power BI dashboard for comparing sales, profit, products, regions, and business performance trends.",
    description: "Designed a Power BI dashboard to analyze sales and profit performance across products, regions, and time periods.",
    tags: ["Power BI", "Sales Analytics", "DAX", "Dashboard"],
    image: salesProfitImage,
    imageFit: "contain",
    impact: "5",
    impactLabel: "Performance Views",
    features: ["Sales and profit KPIs", "Regional performance comparison", "Product-level analysis", "Time-based trend analysis", "Interactive business filters"],
    caseStudy: {
      problem: "Business teams need a clear way to compare sales and profit performance across different segments.",
      process: "Prepared sales data and developed Power BI measures and visuals for products, regions, profit, and time-based comparisons.",
      solution: "An interactive performance dashboard that connects sales and profit insights in one reporting view.",
      outcome: "The dashboard helps identify stronger-performing segments and communicate business trends clearly.",
    },
    links: { github: "https://github.com/Aishwaryaselvaraju/PowerBi_Sales-and-Profit-Performance-Analysis" },
  },
  {
    title: "Excel Sales Dashboard",
    role: "analytics",
    summary: "An Excel dashboard for tracking sales performance, product results, regions, and revenue trends.",
    description: "Created an Excel sales dashboard to summarize revenue, orders, products, and regional performance.",
    tags: ["Excel", "Data Analytics", "PivotTable", "Dashboard"],
    image: salesImage,
    imageFit: "contain",
    impact: "4",
    impactLabel: "Sales Views",
    features: ["Sales KPI tracking", "Product performance analysis", "Regional sales comparison", "PivotTables and charts", "Interactive Excel dashboard"],
    caseStudy: {
      problem: "Sales data is difficult to compare when important metrics are spread across raw worksheets.",
      process: "Cleaned the sales data and used Excel PivotTables, charts, and KPI summaries to organize the main business metrics.",
      solution: "A practical Excel dashboard for viewing sales performance by product, region, and reporting period.",
      outcome: "The dashboard presents sales results in a compact format that is easy to review and share.",
    },
    links: { github: "https://github.com/Aishwaryaselvaraju/Excel_Sales-Dashboard" },
  },
  {
    title: "Global Sales & Profit Dashboard",
    role: "analytics",
    summary: "A Tableau dashboard for exploring global sales, profit, regional performance, and product trends.",
    description: "Designed a Tableau dashboard to compare global sales and profit across regions, categories, and products.",
    tags: ["Tableau", "Data Visualization", "Sales Analytics", "Dashboard"],
    image: globalSalesImage,
    imageFit: "contain",
    impact: "4",
    impactLabel: "Global Regions",
    features: ["Regional sales map", "Profit and sales trend views", "Category and product comparisons", "Interactive dashboard actions", "Top and bottom performer analysis"],
    caseStudy: {
      problem: "Global sales data needs multiple views to explain regional performance and profit differences.",
      process: "Explored the dataset and built coordinated Tableau views for geography, products, categories, sales, and profit.",
      solution: "An interactive Tableau dashboard that connects regional and product-level sales insights.",
      outcome: "The dashboard makes global performance patterns easier to explore and communicate.",
    },
    links: { github: "https://github.com/Aishwaryaselvaraju/tableau_Global-Sales-and-Profit-Performance-Dashboard" },
  },
  
  {
    title: "Titanic Survival Analysis",
    role: "analytics",
    summary: "A Python analysis of Titanic passenger data to identify the factors associated with survival.",
    description: "Analyzed the Titanic dataset in Python to explore survival rates across passenger demographics and travel classes.",
    tags: ["Python", "Pandas", "Data Analysis", "Visualization"],
    image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?w=600&q=80",
    impact: "891",
    impactLabel: "Passengers Analyzed",
    features: ["Data cleaning and preparation", "Survival rate comparisons", "Age and gender analysis", "Passenger class analysis", "Exploratory data visualizations"],
    caseStudy: {
      problem: "Passenger-level data needs structured exploration to reveal the factors connected to survival.",
      process: "Cleaned the dataset with Python and used Pandas and visualizations to compare survival across key passenger groups.",
      solution: "A focused exploratory analysis that explains survival patterns through demographic and class comparisons.",
      outcome: "The analysis presents clear insights into how passenger characteristics related to survival outcomes.",
    },
    links: { github: "https://github.com/Aishwaryaselvaraju/CODSOFT" },
  },
  
];

/* ------------------------------------------------------------------ */
/*  CERTIFICATIONS                                                     */
/* ------------------------------------------------------------------ */

export const certifications = [
  {
    title: "Generative AI in Action",
    issuer: "IBM SkillsBuild",
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
    issuer: "Kaggle Learn",
    icon: "📈",
    color: "#10b981",
    description: "Skills in visualizing complex datasets, creating meaningful dashboards, and communicating design insights through data.",
    file: dataVisualizationCertificate,
  },
  {
    title: "Google UX Design Foundations",
    issuer: "IBM SkillsBuild ",
    icon: "🎨",
    color: "#ec4899",
    description: "Foundations in user-centred design, empathy mapping, wireframing, and usability testing.",
    file: uxDesignCertificate,
  },
  {
    title: "Python for Data Analysis",
    issuer: "Infosys Springboard",
    icon: "🐍",
    color: "#8b5cf6",
    description: "Applied Python skills for data cleaning, exploratory analysis, and communicating findings.",
    file: pythonCertificate,
  },
  {
    title: "Data Analysis",
    issuer: "Novi Tech Research & Development",
    icon: "📊",
    color: "#14b8a6",
    description: "Principles for selecting effective charts and building clear, decision-ready visual stories.",
    file: dataAnalysisCertificate,
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
    title: "5 Internships Across Domains",
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
