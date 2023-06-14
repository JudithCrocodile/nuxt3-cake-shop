import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: true,
  /*
   ** Nuxt modules
   */
  modules: [
    // https://tailwindcsss.nuxtjs.org
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true,
  },
  runtimeConfig: {
    jwtSignSecret: "PLEASE_REPLACE_WITH_YOUR_KEY",
  },
  routeRules: {
    // Static page generated on-demand once
    "/about/**": { static: true },

    "/member/**": { ssr: true },
    "/_id/**": { ssr: true },
    "/count/**": { ssr: false },
    "/product/**": { ssr: false },
    "/count/**": { ssr: false },
    "/shoppingCart/**": { ssr: true },

    "/home/**": { ssr: false },
  },
  // nitro: {
  //   prerender: {
  //     ignore: ["/login", "/index", "/shoppingCart"],
  //     routes: ["/about", "/product/1"], // 預渲染的靜態頁面
  //     crawlLinks: true, // 啟用 Nuxt 爬蟲蒐集頁面連結來進行預渲染
  //   },
  // },
});
