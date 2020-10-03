const path = require('path')
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,800' }
    ],
    bodyAttrs: {
      class: ''
    },
    script: [{
      //src: "https://ioanb7.com/wp-content/themes/ioanb7_sys/assets/lib/prism/prism.js?ver=1.0", defer: true
    },],
  },
  optimization: {
    minimize: true,
  },

  serverMiddleware: [
    '~/api/v1/index.js'
  ],

  generate: {
    minify: false
  },
  /*
  ** Customize the loading
  */
  loading: '~/components/loading.vue',

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/style.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: '~/plugins/vue-masonry-css',
    ssr: false
  }, {
    src: "~/plugins/prism",
    ssr: false
  }, {
    src: '~/plugins/vue-cookie-law',
    ssr: false
  }, {
    src: '~/plugins/vue-linkify',
    ssr: false
  }],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-168116512-1' //process.env.GOOGLE_ANALYTICS_ID
    }],
    '@nuxtjs/moment',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/sentry',
    'nuxt-material-design-icons',
    ['nuxt-lazy-load', {
      directiveOnly: true,
      defaultImage: '/images/default-image.png',
    }]
  ],

  sentry: {
    dsn: 'https://55f9f691e8ac49f3aae6559f77e70612@o387218.ingest.sentry.io/5222171',
    config: {}, // Additional config
  },

  purgeCSS: {
    whitelist: ["html", "body"],
    whitelistPatternsChildren: [/^token/, /^pre/, /^code/, /^toolbar/, /^iframe/],
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
      if (ctx.isDev) {
        config.optimization.minimize = false;
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },

    "html.minify": {
      preserveLineBreaks: true,
      minifyCSS: false,
      minifyJS: false,
    },

    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {}
      }
    },
    preset: {
      stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    }
  },

  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  },

  router: {
    trailingSlash: false
  }

  //server: {
  //  port: 12345,
  //  host: '0.0.0.0'
  //}
}
