import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';  // Asegúrate de importar 'resolve'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@fortawesome': resolve(__dirname, 'node_modules/@fortawesome') // Asegura que los paquetes de FontAwesome sean resueltos correctamente
    }
  },
  optimizeDeps: {
    include: ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons', '@fortawesome/free-brands-svg-icons'] // Pre-optimiza estos paquetes para acelerar los tiempos de recarga
  }
});
