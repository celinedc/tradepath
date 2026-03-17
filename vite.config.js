import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'grandly-homochromous-kathleen.ngrok-free.dev',
      'tradepath.tech'
    ],
    port: 80,
    host: true
  },
  optimizeDeps: {
    include: ['recharts', 'lucide-react', 'framer-motion']
  }
})
