import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages deployment path
  base: '/portofolio/',
  publicDir: 'public',
  assetsInclude: ['**/*.png', '**/*.json'],
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
