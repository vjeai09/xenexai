import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ onOpenBeta }){
  return (
    <section className="relative rounded-2xl overflow-hidden hero-anim p-8 md:p-12 mb-12 glass glow">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        {/* Abstract animated shapes */}
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0%" x2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g1)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h1 className="h1 text-4xl md:text-5xl text-white">XeneX AI — Intelligence That Accelerates You.</h1>
          <p className="mt-4 text-slate-300 max-w-2xl">Empowering organizations with generative intelligence and GPU-accelerated solutions.</p>

          <div className="mt-6 flex gap-4">
            <a href="#explore" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:opacity-95 transition">Explore Platform</a>
            <button onClick={onOpenBeta} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg glass border border-white/10 text-slate-200 hover:bg-white/3 transition">Join Beta</button>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3"
        >
          <div className="glass p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white"><path d="M12 2v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 12h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div className="text-sm text-slate-200 font-semibold">AI Engine</div>
                <div className="text-xs text-slate-400">Developer-ready APIs and SDKs</div>
              </div>
            </div>
            <div className="mt-4 text-slate-300 text-sm">Looping abstract animation and GPU-optimized inference for low-latency applications.</div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
