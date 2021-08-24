import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    }),
  ],
  resolve: {
    alias: {
      'vue-router': 'https://cdn.skypack.dev/vue-router',
      'vue-axios': 'https://cdn.skypack.dev/vue-axios',
      'axios': 'https://cdn.skypack.dev/axios'
    }
  },
  server:{
    host:'0.0.0.0'
  }
})
