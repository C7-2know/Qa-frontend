import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue()],
  server: {
    hmr: {
      overlay: false,  // To disable the overlay on errors (optional)
    },
  },
  optimizeDeps:{
    includeL:['vue3-toastify']
  }
};
