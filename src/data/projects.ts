import type { Project } from '../types/project'
// Add a new project by adding one object to this array.
export const projects: Project[] = [
  {
    id: 1,
    title: { uz: 'IT Markaz', en: 'IT Markaz', ru: 'IT Markaz' },
    description: {
      uz: "IT o\u2018quv markazi uchun zamonaviy veb-sayt: kurslar, yo\u2018nalishlar va ro\u2018yxatdan o\u2018tish imkoniyati.",
      en: 'A modern website for an IT education center with courses, directions and an enrollment flow.',
      ru: '\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 \u0434\u043b\u044f IT-\u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0446\u0435\u043d\u0442\u0440\u0430: \u043a\u0443\u0440\u0441\u044b, \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435.',
    },
    image: '/images/projects/project-01.jpg',
    technologies: ['React', 'TypeScript', 'Vite'],
    githubUrl: '#',
    liveUrl: 'https://itmarkaz2.onrender.com/',
    category: 'Fullstack',
    featured: true,
  },
  {
    id: 2,
    title: { uz: 'LinkKerak', en: 'LinkKerak', ru: 'LinkKerak' },
    description: {
      uz: 'Havolalarni boshqarish va qisqartirish uchun qulay veb-xizmat.',
      en: 'A handy web service for managing and shortening links.',
      ru: '\u0423\u0434\u043e\u0431\u043d\u044b\u0439 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0441\u0441\u044b\u043b\u043e\u043a.',
    },
    image: '/images/projects/project-03.jpg',
    technologies: ['React', 'TypeScript', 'Node.js'],
    githubUrl: '#',
    liveUrl: 'https://linkkerak.vercel.app/',
    category: 'Fullstack',
    featured: false,
  },
  {
    id: 3,
    title: { uz: 'Olmos Restorant', en: 'Olmos Restaurant', ru: 'Olmos \u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d' },
    description: {
      uz: 'Restoran uchun zamonaviy veb-sayt: menyu, galereya va joy band qilish imkoniyati.',
      en: 'A modern restaurant website with a menu, gallery and table reservation.',
      ru: '\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430: \u043c\u0435\u043d\u044e, \u0433\u0430\u043b\u0435\u0440\u0435\u044f \u0438 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0438\u043a\u043e\u0432.',
    },
    image: '/images/projects/project-02.jpg',
    technologies: ['React', 'CSS'],
    githubUrl: '#',
    liveUrl: 'https://olmos-restorant.vercel.app/',
    category: 'Frontend',
    featured: true,
  },
]
