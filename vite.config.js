import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for built files
  },
  server: {
    watch: {
      usePolling: true, // Enable polling for file watching
    },
  },
})
