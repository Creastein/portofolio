import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages URL structure: https://username.github.io/repository/
  // base: '/portofolio/' jika deploy ke repo URL
  // base: '/' jika deploy ke domain utama (misal custom domain)
  base: '/portofolio/',
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps untuk production
    rollupOptions: {
      output: {
        // Optimalkan output bundle
        manualChunks: undefined,
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
