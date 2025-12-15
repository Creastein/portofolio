import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages deployment path - use root for universal compatibility
  base: '/',
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
