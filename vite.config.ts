import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_variables.scss";
        `
      }
    }
  }
})
