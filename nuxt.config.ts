// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      title: "List User - список работ.",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        {
          hid: "format-detection",
          name: "format-detection",
          content: "telephone=no",
        },
        { hid: "color-scheme", name: "color-scheme", content: "light only" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon.png",
        },
      ],
    },
  },
  css: ["@/assets/scss/main.scss"],
  modules: [
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxt/image-edge",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Montserrat: [100, 300, 400, 500, 600, 700, 800],
        },
        download: true,
        inject: true,
      },
    ],
  ],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-08-08",
});
