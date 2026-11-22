import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // THE SITE LIVES AT https://ellio24a.github.io/PortfolioWebsite/
  // SO EVERY FILE PATH NEEDS TO START WITH /PortfolioWebsite/
  base: '/PortfolioWebsite/',
})
