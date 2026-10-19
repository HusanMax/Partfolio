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
  // Optional card layout override (1-6); defaults to a repeating pattern based on id.
  layout?: 1 | 2 | 3 | 4 | 5 | 6
}
