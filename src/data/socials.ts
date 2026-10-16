export const EMAIL = 'husannnax@gmail.com'
export interface Social { name: string; url: string; handle?: string }
export const socials: Social[] = [
  { name: 'GitHub', url: 'https://github.com/HusanMax', handle: '@HusanMax' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/husan-maxmarajapov-077020444/', handle: '@husan-maxmarajapov' },
  { name: 'X', url: 'https://x.com/HusaMax4', handle: '@HusaMax4' },
  { name: 'Telegram', url: 'https://t.me/HusanMax', handle: '@HusanMax' },
  { name: 'Instagram', url: 'https://instagram.com/m.husanw3', handle: '@m.husanw3' },
]
export const mainSocials = socials
export const social = (name: string) => socials.find((s) => s.name === name)!
