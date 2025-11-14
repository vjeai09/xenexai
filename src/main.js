// Lightweight site JS: modal, focus-trap, Formspree submit, toast
const FORM_ENDPOINT = 'https://formspree.io/f/mrbrbbqb'

function $(sel, ctx=document) { return ctx.querySelector(sel) }
function $all(sel, ctx=document) { return Array.from(ctx.querySelectorAll(sel)) }

const openBtn = $('#open-beta')
const modal = $('#signup-modal')
const backdrop = $('#modal-backdrop')
const closeBtn = $('#signup-close')
const form = $('#signup-form')
const emailInput = $('#signup-email')
const statusEl = $('#signup-status')
const toast = $('#toast')

function showModal(){
  modal.classList.remove('hidden')
  // focus the first focusable
  setTimeout(()=> emailInput.focus(), 50)
}
function hideModal(){
  modal.classList.add('hidden')
}

openBtn?.addEventListener('click', (e)=>{ showModal() })
backdrop?.addEventListener('click', ()=> hideModal())
closeBtn?.addEventListener('click', ()=> hideModal())

// basic focus trap
document.addEventListener('keydown', (e)=>{
  if (modal.classList.contains('hidden')) return
  if (e.key === 'Escape') hideModal()
  if (e.key === 'Tab'){
    const focusable = $all('a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])', modal)
    if (!focusable.length) { e.preventDefault(); return }
    const first = focusable[0], last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus() }
  }
})

form?.addEventListener('submit', async (e)=>{
  e.preventDefault()
  const email = emailInput.value.trim()
  if (!email || !/\S+@\S+\.\S+/.test(email)){
    statusEl.textContent = 'Please enter a valid email.'
    statusEl.className = 'mt-3 text-sm text-rose-400'
    return
  }
  statusEl.textContent = ''
  $('#signup-submit').disabled = true
  try{
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    if (!res.ok) throw new Error('Network error')
    statusEl.textContent = "Thanks — we'll be in touch."
    statusEl.className = 'mt-3 text-sm text-emerald-400'
    emailInput.value = ''
    showToast()
  }catch(err){
    statusEl.textContent = 'Something went wrong — please try again later.'
    statusEl.className = 'mt-3 text-sm text-rose-400'
  }finally{
    $('#signup-submit').disabled = false
  }
})

function showToast(){
  toast.classList.remove('hidden')
  setTimeout(()=> toast.classList.add('hidden'), 3000)
}

// set year
document.getElementById('year').textContent = new Date().getFullYear()
