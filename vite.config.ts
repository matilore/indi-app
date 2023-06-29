import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const config = {
        plugins: [react()],
        test: {
          globals: true,
          environment: 'jsdom',
          setupFiles: './test-setup.ts',
        },
  };
  if (mode === 'development') {
    Object.assign(config, {
        build: {
            minify: false
        }
    });
  }
  return config;
});
