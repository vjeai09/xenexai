import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Explore from './components/Explore'
import SignupModal from './components/SignupModal'
import { useState } from 'react'

export default function App(){
  const [showSignup, setShowSignup] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center px-6 md:px-12 py-10">
      <div className="w-full container">
        <Hero onOpenBeta={() => setShowSignup(true)} />
        <About />
        <Products />
        <Explore />
        <footer className="mt-20 text-sm text-slate-400 text-center">© {new Date().getFullYear()} XeneX AI — Built for speed & scale</footer>
      </div>

      <SignupModal open={showSignup} onClose={() => setShowSignup(false)} />
    </div>
  )
}
