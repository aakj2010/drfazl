import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
    exclude: ['react-virtualized'],
  },
  build: {
    outDir: 'build', // CRA's default build output
    commonjsOptions: {
      include: [/react-virtualized/, /node_modules/],
    },
  },
  define: {
    global: 'globalThis',
  },
});