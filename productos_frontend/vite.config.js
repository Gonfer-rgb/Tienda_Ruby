import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Importante para Docker
    port: 5173,
    watch: {
      usePolling: true  // Necesario para hot-reload
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
      supported: { 
        bigint: true 
      }
    }
  }
})