export const EMAIL = 'husannnax@gmail.com'
export interface Social { name: string; url: string; handle?: string }
// Replace the GitHub and LinkedIn placeholders with your real URLs.
export const socials: Social[] = [
  { name: 'GitHub', url: 'https://github.com/your-username' },
  { name: 'Telegram', url: 'https://t.me/HusanMax', handle: '@HusanMax' },
  { name: 'Instagram', url: 'https://instagram.com/m.husanw3', handle: '@m.husanw3' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile' },
]
export const mainSocials = socials.filter((s) => s.name !== 'LinkedIn')
export const social = (name: string) => socials.find((s) => s.name === name)!
