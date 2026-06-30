export const navigation = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const heroRoles = ['MERN Stack Developer', 'Full Stack Developer', 'React Developer'];

export const resumeUrl = '/resume.pdf';

export const spotlightStars = Array.from({ length: 72 }, (_, index) => ({
  id: index,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  delay: `${Math.random() * 6}s`,
  duration: `${Math.random() * 4 + 3}s`,
}));