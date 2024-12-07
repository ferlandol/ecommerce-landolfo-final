import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { remix } from '@remix-run/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [remix()],
    base: './'
})