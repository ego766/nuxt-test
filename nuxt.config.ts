// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],
  // Default configuration
  logLevel: "info",

  // Environment overrides
  $test: { logLevel: "info" }, // 'silent' | 'info' | 'verbose';
  $development: { logLevel: "verbose" }, // verbose级别输出的信息最为详细
  $production: { logLevel: "silent" }, // 不输出任何日志
  $env: {
    staging: { logLevel: "info" },
  },
  app: {
    head: {
      
      // update Nuxt defaults
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },
})