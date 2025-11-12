import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // When deploying to GitHub Pages for a project site (https://<user>.github.io/<repo>/)
  // set the `base` to the repo name path so asset URLs resolve correctly.
  // If you prefer a root site (user/org pages), set base to '/'.
  base: '/xenexai/',
})
