import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to https://<user>.github.io/<repo-name>/, set base to
  // '/<repo-name>/'. If deploying to https://<user>.github.io/ (a repo
  // literally named <user>.github.io), leave base as '/'.
  base: '/Portfolio/',
})
