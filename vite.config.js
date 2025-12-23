import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '')

  // Determine base path:
  // 1. If VERCEL is set, use '/' (root)
  // 2. If GITHUB_ACTIONS is set (and not Vercel), use '/portofolio/' for GitHub Pages
  // 3. Otherwise (Local dev), use '/'

  let base = '/'
  if (process.env.GITHUB_ACTIONS === 'true' && process.env.VERCEL !== '1') {
    base = '/portofolio/'
  }

  return {
    base: base,
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
  }
})
