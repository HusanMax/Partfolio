import { useEffect, useRef } from 'react'
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const root = document.documentElement
    root.classList.add('has-cursor')
    let x = innerWidth / 2, y = innerHeight / 3, rx = x, ry = y, raf = 0
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY
      root.style.setProperty('--mx', x + 'px'); root.style.setProperty('--my', y + 'px')
      const hot = (e.target as HTMLElement).closest('a,button,[data-cursor],input,textarea,img')
      ring.current?.classList.toggle('hot', !!hot)
    }
    const loop = () => {
      rx += (x - rx) * 0.2; ry += (y - ry) * 0.2
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px)`
      if (dot.current) dot.current.style.transform = `translate(${x}px,${y}px)`
      raf = requestAnimationFrame(loop)
    }
    addEventListener('mousemove', move, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => { removeEventListener('mousemove', move); cancelAnimationFrame(raf); root.classList.remove('has-cursor') }
  }, [])
  return (<><div ref={ring} className="cur-ring" aria-hidden="true" /><div ref={dot} className="cur-dot" aria-hidden="true" /></>)
}
