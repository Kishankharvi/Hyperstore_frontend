import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';

export default defineConfig({
  plugins: [
    react(),
    inject({
      process: 'process',
      Buffer: ['buffer', 'Buffer'],
      'import.meta.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL)
    }),
  ],
  define: {
    'process.env': {}, // or provide specific environment variables
  },
  resolve: {
    alias: {
      process: 'process',
    },
  },
});