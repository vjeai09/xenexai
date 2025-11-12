import React from 'react'
import { motion } from 'framer-motion'

const features = [
  { title: 'Generative Apps', desc: 'Build intelligent apps with grounded generation and customizable LLMs.' },
  { title: 'RAG Pipelines', desc: 'Robust retrieval-augmented generation workflows and knowledge connectors.' },
  { title: 'GPU Acceleration', desc: 'Scale inference with optimized GPU runtimes and batching.' },
]

export default function About(){
  return (
    <section className="mt-6 mb-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-bold">About XeneX AI</h2>
        <p className="mt-3 text-slate-300 max-w-3xl">XeneX AI develops LLM-integrated business tools, RAG pipelines, and AI copilots designed to accelerate decision-making and automate complex workflows for enterprises.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} className="glass p-6 rounded-xl" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 150 }}>
              <div className="text-indigo-400 text-xl font-semibold">{f.title}</div>
              <div className="mt-2 text-slate-300">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
