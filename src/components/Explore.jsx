import React from 'react'
import { motion } from 'framer-motion'

export default function Explore(){
  return (
    <section id="explore" className="mt-12 mb-12">
      <motion.h4 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold">Explore the Platform</motion.h4>
      <p className="mt-3 text-slate-300 max-w-3xl">Explore XeneX AI's capabilities — from developer tooling and embeddings to RAG pipelines and GPU inference. This placeholder section can be expanded into a full product walkthrough or docs landing page.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-xl">
          <div className="font-semibold">Developer APIs</div>
          <div className="mt-2 text-slate-300">Streaming, batching, and SDKs for common languages.</div>
        </div>
        <div className="glass p-6 rounded-xl">
          <div className="font-semibold">Enterprise Integrations</div>
          <div className="mt-2 text-slate-300">Connectors, security, and observability for production deployments.</div>
        </div>
      </div>
    </section>
  )
}
