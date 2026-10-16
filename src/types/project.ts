import type { Lang } from '../i18n/translations'
export type Category = 'Frontend' | 'Fullstack' | 'Backend'
export interface Project {
  id: number
  title: Record<Lang, string>
  description: Record<Lang, string>
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  category: Category
  featured: boolean
}
