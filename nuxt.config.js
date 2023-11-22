export default {
  // ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt2-mobile-template",
    htmlAttrs: {
      lang: "zh-CN",
    },
    __dangerouslyDisableSanitizers: ["innerHTML"],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no,email=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  server: {
    port: "8888",
    host: "0.0.0.0",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/styles/reset.css", "~/styles/rem.scss"],

  serverMiddleware: ["~/server-middleware/ua.js"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/request.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
    [
      "@nuxtjs/dotenv",
      { path: __dirname, filename: ".env." + process.env.NODE_ENV },
    ],
  ],

  axios: {
    proxy: true,
    progress: false,
  },

  proxy: {
    "/api": {
      target: "http://test.domain.com",
      pathRewrite: { "^/api": "" },
      changeOrigin: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /* html: {
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeAttributeQuotes: false,
        removeComments: false,
        removeEmptyAttributes: true,
        removeOptionalTags: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        removeTagWhitespace: false,
        sortClassName: false,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    }, */
    loaders: {
      scss: {
        additionalData:
          "@import '~/styles/variables.scss';@import '~/styles/mixins.scss';",
      },
    },
    postcss: {
      postcssOptions: {
        plugins: {
          "postcss-pxtorem": {
            rootValue: 37.5,
            unitPrecision: 5,
            propList: ["*"],
            selectorBlackList: ["html", "body"],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
            exclude: /(node_modules)/i,
          },
        },
        preset: {
          autoprefixer: true,
          stage: 3,
        },
      },
    },
  },

  // loading: false,
  loading: {
    color: "#3466ff",
  },

  // Without Server Side Rendering (when ssr option is false), there is no content from the server side on the first page load. So, instead of showing a blank page while the page loads, we may show a spinner.
  // loadingIndicator: false,

  render: {
    resourceHints: false,
    crossorigin: "anonymous",
  },

  // More customizable than ignorePrefix: all files matching glob patterns specified inside ignore will be ignored in building.
  ignore: ["pages/**/components/*.*"],

  router: {
    base: "/",
    prefetchLinks: false,
  },
};
