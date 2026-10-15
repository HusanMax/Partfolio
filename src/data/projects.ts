import type { Project } from '../types/project'
// Add a new project by adding one object to this array.
export const projects: Project[] = [
  { id: 1, title: 'Project Name', description: 'Short project description. Replace this with what the project does and the problem it solves.', image: '/images/projects/project-01.jpg', technologies: ['React', 'TypeScript', 'Node.js'], githubUrl: '#', liveUrl: '#', category: 'Fullstack', featured: true },
  { id: 2, title: 'Project Name', description: 'Short project description. Replace this with your own text.', image: '/images/projects/project-02.jpg', technologies: ['React', 'Redux'], githubUrl: '#', liveUrl: '#', category: 'Frontend', featured: false },
  { id: 3, title: 'Project Name', description: 'Short project description. Replace this with your own text.', image: '/images/projects/project-03.jpg', technologies: ['Node.js', 'Express.js', 'PostgreSQL'], githubUrl: '#', liveUrl: '#', category: 'Backend', featured: false },
  { id: 4, title: 'Project Name', description: 'Short project description. Replace this with your own text.', image: '/images/projects/project-04.jpg', technologies: ['React', 'TypeScript', 'MongoDB'], githubUrl: '#', liveUrl: '#', category: 'Fullstack', featured: false },
  { id: 5, title: 'Project Name', description: 'Short project description. Replace this with your own text.', image: '/images/projects/project-05.jpg', technologies: ['HTML', 'CSS', 'JavaScript'], githubUrl: '#', liveUrl: '#', category: 'Frontend', featured: false },
  { id: 6, title: 'Project Name', description: 'Short project description. Replace this with your own text.', image: '/images/projects/project-06.jpg', technologies: ['NestJS', 'PostgreSQL', 'TypeScript'], githubUrl: '#', liveUrl: '#', category: 'Backend', featured: false },
]
