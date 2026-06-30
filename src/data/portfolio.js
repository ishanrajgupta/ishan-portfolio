import {
  SiDocker,
  SiExpress,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { FaAws, FaLinkedinIn, FaEnvelope, FaDownload } from 'react-icons/fa6';

export const heroRoles = ['MERN Stack Developer', 'Full Stack Developer', 'React Developer'];

export const profileName = 'Ishan Raj Gupta';
export const profileTagline = 'MERN Stack Developer';
export const profileSummary =
  'Full stack developer with hands-on experience in building responsive and scalable web applications using the MERN stack, REST APIs, and modern frontend tooling.';

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const resumeUrl = 'https://drive.google.com/file/d/1MQYXr0hTCZibDn5l_sr-AZN46BINKeMS/view?usp=drivesdk';
export const emailAddress = 'ishan1004@gmail.com';
export const phoneNumber = '+91 8827822494';
export const githubUrl = 'https://github.com/ishanrajgupta';
export const linkedinUrl = 'https://www.linkedin.com/in/ishan-raj-gupta-a6ba032a5/';

export const heroMetrics = [
  { value: 1, label: 'Years building modern interfaces', suffix: '+' },
  { value: 6, label: 'Projects delivered', suffix: '+' },
  { value: 1, label: 'Current internship', suffix: '' },
];

export const orbitTechnologies = [
  { icon: SiReact, label: 'React' },
  { icon: SiNodedotjs, label: 'Node.js' },
  { icon: SiExpress, label: 'Express' },
  { icon: SiMongodb, label: 'MongoDB' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiTailwindcss, label: 'Tailwind' },
  { icon: SiGithub, label: 'GitHub' },
  { icon: SiDocker, label: 'Docker' },
  { icon: FaAws, label: 'AWS' },
];

export const profileTimeline = [
  {
    year: '2023 - 2027',
    title: 'Bachelor of Technology, Computer Science Engineering',
company: 'SSIPMT Raipur',
    description:
      'Computer Science Engineering with an overall CGPA of 8.0 and a strong focus on web development fundamentals.',
  },
  {
    year: 'Mar 2025 - Apr 2025',
    title: 'Frontend Developer Intern',
    company: 'Cognifyz Technologies',
    description:
      'Built responsive web pages with HTML, CSS, Bootstrap, and Bulma while improving responsiveness and dashboard usability.',
  },
  {
    year: '2023',
    title: 'Higher Secondary Education',
    company: 'Class XII, ISC',
    description:
      'Completed higher secondary education with an aggregate score of 77.2%.',
  },
];

export const education = [
  {
    title: 'B.Tech in Computer Science Engineering',
    meta: 'SSIPMT Raipur',
  },
  {
    title: 'Class XII (ISC)',
    meta: '77.2% aggregate score',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: SiReact,
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: SiNodedotjs,
    items: ['Node.js', 'Express', 'REST APIs', 'Server logic', 'Authentication'],
  },
  {
    title: 'Database',
    icon: SiMongodb,
    items: ['MongoDB', 'Mongoose', 'Data modeling', 'Aggregation', 'CRUD'],
  },
  {
    title: 'Tools',
    icon: SiGithub,
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Debugging'],
  },
  {
    title: 'Languages',
    icon: SiJavascript,
    items: ['JavaScript', 'C++', 'SQL', 'HTML', 'CSS'],
  },
];

export const skillMeters = [
  { label: 'Frontend Development', value: 94 },
  { label: 'Backend Logic', value: 88 },
  { label: 'Database Design', value: 90 },
  { label: 'Problem Solving', value: 92 },
];

export const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Cognifyz Technologies',
    time: 'Mar 2025 - Apr 2025',
    description:
      'Built responsive web pages using HTML, CSS, Bootstrap, and Bulma. Improved website responsiveness across devices and collaborated on UI refinement.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Bulma'],
  },
  {
    role: 'Project Builder',
    company: 'Academic / Personal Work',
    time: '2023 - Present',
    description:
      'Developed full-stack and frontend projects centered on smart expense tracking, data-driven dashboards, and interactive AI chat experiences.',
    technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
  },
];

export const projects = [
  {
    name: 'ExpenseIO',
    description:
      'Smart Expense and Budget Manager with transaction tracking, budget insights, and a clean dashboard experience.',
    features: ['Expense tracking', 'Budget insight', 'Transaction history'],
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(59,130,246,0.18))',
  },
  // {
  //   name: 'Live Demo Dashboard',
  //   description:
  //     'A responsive interface concept for tracking and managing daily operations with fast, mobile-friendly navigation.',
  //   features: ['Responsive layout', 'Admin-friendly UI', 'Workflow cards'],
  //   tags: ['HTML', 'CSS', 'Bootstrap'],
  //   image: 'linear-gradient(135deg, rgba(59,130,246,0.34), rgba(168,85,247,0.2))',
  // },
  {
    name: 'Personal AI Chatbot',
    description:
      'A document-aware assistant designed for smart search and retrieval with a simple, interactive interface.',
    features: ['Smart search', 'Contextual answers', 'Interactive UI'],
    tags: ['React', 'Node.js', 'AI'],
    image: 'linear-gradient(135deg, rgba(16,185,129,0.28), rgba(59,130,246,0.2))',
  },
  // {
  //   name: 'Portfolio Concept',
  //   description:
  //     'An additional placeholder project area for future work, case studies, and client builds.',
  //   features: ['Reusable UI', 'Motion design', 'Responsive system'],
  //   tags: ['React', 'Tailwind', 'Framer Motion'],
  //   image: 'linear-gradient(135deg, rgba(168,85,247,0.28), rgba(14,165,233,0.18))',
  // },
];

export const achievements = [
  {
    title: 'Vice President',
    detail: 'Computer Science Association, SSIPMT.',
  },
  {
    title: 'YI Road Safety Chair',
    detail: 'Served as a leadership contributor in youth-led safety initiatives.',
  },
  {
    title: 'Placement Assistance Cell Member',
    detail: 'Helped coordinate placement support activities at SSIPMT Raipur.',
  },
  {
    title: 'Student Activity Center Member',
    detail: 'Contributed to student engagement and activity planning at SSIPMT Raipur.',
  },
];

export const contactChannels = [
  { label: 'Email', value: emailAddress, href: `mailto:${emailAddress}`, icon: FaEnvelope },
  { label: 'Phone', value: phoneNumber, href: `tel:${phoneNumber.replace(/\s+/g, '')}`, icon: FaDownload },
  { label: 'LinkedIn', value: 'ishan-raj-gupta-abb03285', href: linkedinUrl, icon: FaLinkedinIn },
  { label: 'GitHub', value: 'ishanrajgupta', href: githubUrl, icon: SiGithub },
];

export const socialLinks = [
  { label: 'GitHub', href: githubUrl, icon: SiGithub },
  { label: 'LinkedIn', href: linkedinUrl, icon: FaLinkedinIn },
  { label: 'Resume', href: resumeUrl, icon: FaDownload },
];

export const techStackBadges = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind',
  'Framer Motion',
  'GSAP',
  'Lenis',
];