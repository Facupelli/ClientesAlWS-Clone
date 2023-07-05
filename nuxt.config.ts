// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxt/image"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
