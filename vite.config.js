import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/mynewportfolio/",
  build: {
    outDir: "dist",
    assetsInclude: ['**/*.mp4', '**/*.pdf'] // Explicitly include video/pdf assets
  }
});
