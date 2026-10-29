import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // three.js is its own lazily loaded chunk, so a larger size is expected
  build: { chunkSizeWarningLimit: 800 },
});
