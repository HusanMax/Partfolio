export interface Skill { name: string; category: string; icon: string; percentage: number }
export interface SkillGroup { title: string; items: Skill[] }
const T = 'text-anchor="middle" font-family="Inter,Arial,sans-serif" font-weight="700"'
const shield = (c: string, n: string) => `<path fill="${c}" d="M4 3l1.6 17L12 22l6.4-2L20 3z"/><text x="12" y="16" ${T} font-size="9" fill="#fff">${n}</text>`
const sq = (c: string, t: string, f: string) => `<rect x="3" y="3" width="18" height="18" rx="2.5" fill="${c}"/><text x="19.5" y="19" text-anchor="end" font-family="Inter,Arial,sans-serif" font-weight="800" font-size="8.5" fill="${f}">${t}</text>`
const ring = (a: number) => `<ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(${a} 12 12)"/>`
const cyl = (a: string, b: string) => `<ellipse cx="12" cy="6" rx="7" ry="3" fill="${a}"/><path fill="${b}" d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6c0 1.7-3.1 3-7 3S5 7.7 5 6z"/>`
const I: Record<string, string> = {
  HTML: shield('#e44d26', '5'), CSS: shield('#1572b6', '3'),
  JavaScript: sq('#f7df1e', 'JS', '#111'), TypeScript: sq('#3178c6', 'TS', '#fff'),
  React: `<g fill="none" stroke="#61dafb" stroke-width="1.2">${ring(0)}${ring(60)}${ring(120)}</g><circle cx="12" cy="12" r="1.9" fill="#61dafb"/>`,
  Redux: `<g fill="none" stroke="#764abc" stroke-width="1.9" stroke-linecap="round"><path d="M15 19.5c3 .2 5.2-2 5.2-5 0-4-4-5.2-6.2-6"/><path d="M9.5 18.5c-3-.6-5-3-4.2-6 .5-2 2-3.2 3.5-3.8"/><path d="M10 6.2c1.2-2.2 4.5-2.8 6.2-.8"/></g><circle cx="13.5" cy="7.8" r="1.4" fill="#764abc"/>`,
  'Node.js': `<path fill="#539e43" d="M12 2l8.5 5v10L12 22l-8.5-5V7z"/><text x="12" y="16" ${T} font-size="10" fill="#fff">N</text>`,
  'Express.js': `<text x="12" y="16.5" ${T} font-size="13" fill="#fff">ex</text>`,
  NestJS: `<circle cx="12" cy="12" r="9.5" fill="#e0234e"/><text x="12" y="16" ${T} font-size="11" fill="#fff">N</text>`,
  PostgreSQL: cyl('#336791', '#4a86b8') + `<text x="12" y="17" ${T} font-size="6" fill="#fff">Pg</text>`,
  MongoDB: `<path fill="#47a248" d="M12 2c2.2 3.2 5.2 6 5.2 11a5.2 5.2 0 0 1-4.2 5.1V22h-2v-3.9A5.2 5.2 0 0 1 6.8 13C6.8 8 9.8 5.2 12 2z"/><path fill="#fff" opacity=".6" d="M12 6v13h.4V6z"/>`,
  SQL: `<rect x="3" y="4" width="18" height="16" rx="2.5" fill="#64748b"/><path stroke="#fff" stroke-width="1.3" opacity=".9" d="M3 9h18M3 14h18M9.5 9v11"/>`,
  Git: `<rect x="4" y="4" width="16" height="16" rx="2.5" transform="rotate(45 12 12)" fill="#f05032"/><path stroke="#fff" stroke-width="1.5" fill="none" d="M9 8.5v7M9 12.5l5-2.5"/><g fill="#fff"><circle cx="9" cy="8.5" r="1.5"/><circle cx="9" cy="15.5" r="1.5"/><circle cx="14" cy="10" r="1.5"/></g>`,
  GitHub: `<circle cx="12" cy="12" r="10" fill="#fff"/><path fill="#0b0b0b" d="M7 8l2.1 1.3a6.2 6.2 0 0 1 5.8 0L17 8l-.6 2.8c.4.6.6 1.3.6 2.1 0 2.7-2 3.9-5 3.9s-5-1.2-5-3.9c0-.8.2-1.5.6-2.1z"/>`,
}
const g = (title: string, items: [string, number][]): SkillGroup => ({
  title,
  items: items.map(([name, percentage]) => ({ name, percentage, category: title, icon: I[name] })),
})
export const skillGroups: SkillGroup[] = [
  g('Frontend', [['HTML', 90], ['CSS', 85], ['JavaScript', 80], ['TypeScript', 70], ['React', 75], ['Redux', 65]]),
  g('Backend', [['Node.js', 75], ['Express.js', 75], ['NestJS', 60]]),
  g('Databases', [['PostgreSQL', 70], ['MongoDB', 65]]),
  g('Database & Query', [['SQL', 70]]),
  g('Tools', [['Git', 75], ['GitHub', 80]]),
]
