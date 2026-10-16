import { useState } from 'react'
interface Props { src: string; alt: string; label: string; className?: string; eager?: boolean; style?: React.CSSProperties }
// Shows a styled placeholder until the real image file exists.
export default function SmartImage({ src, alt, label, className = '', eager, style }: Props) {
  const [bad, setBad] = useState(false)
  if (bad) return <div className={`ph ${className}`} role="img" aria-label={alt} style={style}><span>{label}</span></div>
  return <img src={src} alt={alt} className={className} style={style} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setBad(true)} />
}
