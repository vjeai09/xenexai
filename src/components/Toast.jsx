import React from 'react'

export default function Toast({ show, children }){
  if (!show) return null
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-slate-800 text-white px-4 py-2 rounded shadow-lg">{children}</div>
    </div>
  )
}
