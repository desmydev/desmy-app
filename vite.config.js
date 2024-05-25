import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: 'IP_ADDRESS'
  // },
  // base:'/static', //uncomment if local fonts are not loading
  plugins: [react()],
  
  build:{
    publicDir: 'public',
    chunkSizeWarningLimit: 2600,
    rollupOptions: {
    output: {
      manualChunks: false,
      inlineDynamicImports: true,
      entryFileNames: '[name].js',   // currently does not work for the legacy bundle
      assetFileNames: '[name].[ext]', // currently does not work for images
    },
  }
  }
  
})
