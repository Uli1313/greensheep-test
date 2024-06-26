import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/greensheep-test/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  assetsInclude: ['**/*.JPG'],
  server: {
    proxy: {
      '/oauth/token': {
        target: 'https://notify-bot.line.me',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
