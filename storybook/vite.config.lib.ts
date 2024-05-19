import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/stories/components/index.tsx', // 指向你的入口文件
      name: 'sbui-react', // 库的名字，用于UMD格式
      fileName: (format) => `sbui-react.${format}.js` // 输出文件的名称
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        }
      }
    },
    outDir: 'distLib'
  },
})
