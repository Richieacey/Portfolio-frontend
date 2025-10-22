import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import history from 'connect-history-api-fallback'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: false,
    fs: { strict: true },
  },
  configureServer: ({ middlewares }) => {
    middlewares.use(history())
  },
})
