// https://nuxt.com/docs/api/configuration/nuxt-config
import io from './config/io'

export default defineNuxtConfig({
  modules: [
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
    "nuxt-socket-io",
    "dayjs-nuxt"
  ],
  io,
  pinia: {
    autoImports: ["defineStore"],
  },
  alias: {
    "@store": "/store",
  },
  devtools: { enabled: false },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
});
