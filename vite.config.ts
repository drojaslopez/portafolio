import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // or '/your-repo-name/' if using GitHub Pages with a repository name
})