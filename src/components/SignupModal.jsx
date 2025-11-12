import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SignupModal({ open, onClose }){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (!open) {
      setEmail('')
      setStatus(null)
    }
  }, [open])

  function submit(e){
    e.preventDefault()
    if (!email || !/\S+@\S+\.\S+/.test(email)){
      setStatus('invalid')
      return
    }
  // Send to Formspree (client-side).
  const FORM_ENDPOINT = 'https://formspree.io/f/mrbrbbqb'
    setStatus('loading')
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok')
        setStatus('ok')
        setTimeout(() => onClose(), 900)
      })
      .catch(() => setStatus('error'))
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="signup-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-md p-6 glass rounded-xl"
          >
            <h4 id="signup-title" className="text-lg font-semibold">Join the Beta</h4>
            <p className="text-sm text-slate-300 mt-2">Sign up to get early access and updates from XeneX AI.</p>

            <form onSubmit={submit} className="mt-4 flex gap-2">
              <input
                aria-label="Email address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={e=>setEmail(e.target.value)}
                className="flex-1 px-3 py-2 rounded-md bg-transparent border border-white/10 text-white outline-none"
                placeholder="you@company.com"
              />
              <button type="submit" disabled={status === 'loading'} className="px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold">
                {status === 'loading' ? 'Sending…' : 'Join'}
              </button>
            </form>

            {status === 'invalid' && <div className="mt-3 text-sm text-rose-400">Please enter a valid email.</div>}
            {status === 'error' && <div className="mt-3 text-sm text-rose-400">Something went wrong — please try again later.</div>}
            {status === 'ok' && <div className="mt-3 text-sm text-emerald-400">Thanks — we’ll be in touch.</div>}

            <div className="mt-3 text-xs text-slate-400">We’ll only use this email to send product updates. No spam.</div>

            <button aria-label="Close" onClick={onClose} className="absolute top-3 right-3 text-slate-400 hover:text-white">✕</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
