import React from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    title: 'XeneX Core',
    desc: 'AI Engine for developers: prompt tooling, streaming, and embeddings.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 12h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )
  },
  {
    title: 'XeneX RAG Suite',
    desc: 'End-to-end retrieval workflows, connectors, and vector stores.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )
  },
  {
    title: 'XeneX Accelerator',
    desc: 'GPU-optimized runtimes and cost-efficient deployment patterns.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )
  }
]

export default function Products(){
  return (
    <section className="mt-6 mb-12">
      <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-bold">Products</motion.h3>
      <p className="mt-3 text-slate-300">Our core offerings designed for production-grade AI applications.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div key={i} className="glass p-6 rounded-xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-indigo-600 to-cyan-400 text-white flex items-center justify-center">{p.icon}</div>
              <div>
                <div className="font-semibold">{p.title}</div>
                <div className="text-slate-400 text-sm">{p.desc}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
