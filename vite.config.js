import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: '0.0.0.0',
    port: 10000,
    proxy:{
      "/api":{
        target:'https://chatapp-server-hcy6.onrender.com',
      },
    }
  }
})
