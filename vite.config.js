import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuePugPlugin from 'vue-pug-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        preprocessOptions: {
          plugins: [vuePugPlugin],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
