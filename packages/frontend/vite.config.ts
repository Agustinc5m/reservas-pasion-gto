import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El nombre debe coincidir con tu repositorio en GitHub
export default defineConfig({
  plugins: [react()],
  base: '/reservas-pasion-gto/',
})