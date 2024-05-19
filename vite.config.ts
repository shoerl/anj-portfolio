import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      manifest: {
        name: 'Anjali Arvind Portfolio',
        short_name: 'Portfolio',
        description: "Anjali Arvind's professional portfolio website.",
        theme_color: '#1976d2',
        background_color: '#ffffff',
        icons: [],
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
})
