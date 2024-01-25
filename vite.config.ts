import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const customElements = ['selectlist', 'listbox', 'selectedoption'];

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag.toLowerCase()),
        },
      },
      script: {
        defineModel: true,
      },
    }),
  ],
});
