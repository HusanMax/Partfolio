import { useState, type FormEvent } from 'react'
import Reveal from './Reveal'
import { EMAIL, social } from '../data/socials'
import { sendMessage } from '../services/sendMessage'
type Field = 'name' | 'email' | 'message'
type Errors = Partial<Record<Field, string>>
const validate = (v: Record<Field, string>): Errors => {
  const e: Errors = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
  return e
}
export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [err, setErr] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'unconfigured' | 'error'>('idle')
  const tg = social('Telegram'), ig = social('Instagram')
  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const found = validate(v); setErr(found)
    if (Object.keys(found).length) return
    setStatus('sending')
    try { setStatus(await sendMessage(v)) } catch { setStatus('error') }
  }
  const on = (k: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value })
  const fld = (k: Field, label: string, el: React.ReactNode) => (
    <div className={`fld${err[k] ? ' bad' : ''}`}><label htmlFor={k}>{label}</label>{el}{err[k] && <span id={`${k}-e`} role="alert" className="msg">{err[k]}</span>}</div>
  )
  const mail = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello from ' + (v.name || 'your website'))}&body=${encodeURIComponent(v.message)}`
  return (
    <section id="contact" className="sec wrap contact">
      <Reveal><p className="label"><i className="dot" />05 — Contact</p></Reveal>
      <Reveal delay={80}><h2 className="cta">Have a project in mind?<br /><em>Let&apos;s build something.</em></h2></Reveal>
      <div className="c-grid">
        <div>
          <Reveal delay={120}><p className="lead">Have an idea, project or opportunity? Let&apos;s talk.</p></Reveal>
          <Reveal delay={180}>
            <ul className="clinks">
              <li><span>Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><span>Telegram</span><a href={tg.url} target="_blank" rel="noopener noreferrer">{tg.handle}</a></li>
              <li><span>Instagram</span><a href={ig.url} target="_blank" rel="noopener noreferrer">{ig.handle}</a></li>
            </ul>
            <div className="actions">
              <a className="btn" href="#name">Let&apos;s Talk</a>
              <a className="btn ghost" href={`mailto:${EMAIL}`}>Send Email</a>
              <a className="btn ghost" href={tg.url} target="_blank" rel="noopener noreferrer">Open my Telegram</a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <form className="form" onSubmit={submit} noValidate>
            {fld('name', 'Name', <input id="name" autoComplete="name" value={v.name} onChange={on('name')} aria-invalid={!!err.name} aria-describedby={err.name ? 'name-e' : undefined} required />)}
            {fld('email', 'Email', <input id="email" type="email" autoComplete="email" value={v.email} onChange={on('email')} aria-invalid={!!err.email} aria-describedby={err.email ? 'email-e' : undefined} required />)}
            {fld('message', 'Message', <textarea id="message" rows={5} value={v.message} onChange={on('message')} aria-invalid={!!err.message} aria-describedby={err.message ? 'message-e' : undefined} required />)}
            <button className="btn" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Message'}</button>
            <div className="status" role="status" aria-live="polite">
              {status === 'sent' && <p className="ok">Thanks — your message was sent.</p>}
              {status === 'unconfigured' && <p>Your message is valid, but this form isn&apos;t connected to an email service yet, so nothing was sent. <a href={mail}>Send it by email instead →</a></p>}
              {status === 'error' && <p className="bad">Something went wrong. Please try again or <a href={mail}>email me directly</a>.</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
