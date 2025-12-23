import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '')

  // Determine base path for deployment (GitHub Pages vs Vercel/Root)
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
      sourcemap: false,
      rollupOptions: {
        output: {
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
