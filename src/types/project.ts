export type Category = 'Frontend' | 'Fullstack' | 'Backend'
export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  category: Category
  featured: boolean
}
