export interface MessageData { name: string; email: string; message: string }
// Paste an endpoint here (Formspree, Web3Forms, your own API...) to enable real sending.
export const FORM_ENDPOINT = ''
export async function sendMessage(data: MessageData): Promise<'sent' | 'unconfigured'> {
  if (!FORM_ENDPOINT) return 'unconfigured'
  const res = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
  if (!res.ok) throw new Error('Request failed')
  return 'sent'
}
