import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: true,
    port: 5173,  // Ensure this matches your target port
    strictPort: true,
    allowedHosts: ['magarmayur.shop'],  // Add your domain here
  },
});
