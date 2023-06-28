import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const config = {
        plugins: [react()],
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
