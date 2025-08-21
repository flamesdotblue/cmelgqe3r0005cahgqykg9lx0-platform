import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    cors: true,
    allowedHosts: true as any
  },
  preview: {
    port: 3000,
    host: true
  }
}))
