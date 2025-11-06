import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),       // ✅ Add this line
    tailwindcss(), // Keep Tailwind too
  ],
})
