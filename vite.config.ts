import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': '/src',
      '@core': '/src/services/core',
      '@middlewares': '/src/services/middlewares',
      '@store': '/src/services/store',
      '@utils': '/src/services/utils',
      '@views': '/src/views',
    },
    mainFields: [
      'browser',
      'module',
      'main',
      'jsnext:main',
      'jsnext'
    ]
  },
})
