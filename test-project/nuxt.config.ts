// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2024-04-03',
  
  devtools: { enabled: false },
  vue:{
    runtimeCompiler: true,
  },
  modules:['@nuxtjs/storybook'],
  css: ['~/assets/css/main.css','@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
 
  
})