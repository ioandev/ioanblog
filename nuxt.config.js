
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
      { rel: 'icon', type: 'image/x-icon', href: 'https://ioanb7.com/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Roboto+Condensed:400,300' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' },
      /*
      { rel: 'stylesheet', href: 'http://ioanb7.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=4.7' },
      { rel: 'stylesheet', href: 'http://ioanb7.com/wp-content/plugins/wp-analytify/assets/old/css/admin_bar_styles.css?ver=2.1.1' },
      { rel: 'stylesheet', href: 'http://ioanb7.com/wp-content/themes/ioanb7_sys/assets/css/reset.css?ver=4.7.4' },
      { rel: 'stylesheet', href: 'http://ioanb7.com/wp-content/themes/ioanb7_sys/assets/css/original.css?ver=1.0' },
      { rel: 'stylesheet', href: 'http://ioanb7.com/wp-content/themes/ioanb7_sys/assets/lib/prism/prism.css?ver=4.7.4' },
      { rel: 'stylesheet', href: 'http://ioanb7.com/wp-content/plugins/wordpress-popular-posts/style/wpp.css?ver=3.3.4' },*/
      { rel: 'stylesheet', href: '/css/resetr.css' },
      { rel: 'stylesheet', href: '/css/common.css' },
      { rel: 'stylesheet', href: '/css/style.css' },/**/
    ],
    bodyAttrs: {
      class: 'home blog logged-in admin-bar no-customize-support hfeed has-header-image has-sidebar colors-light'
    },
    /*
    script: [{
      src: "https://ioanb7.com/wp-content/themes/ioanb7_sys/assets/lib/prism/prism.js?ver=1.0", defer: true
    },],*/
  },
  /*
  ** Customize the loading
  */
  loading: '~/components/loading.vue',

  /*
  ** Global CSS
  */
  //css: [
    //'@/assets/css/resetr.css',
    //'@/assets/css/common.css',
    //'@/assets/css/style.css',
  //],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    //'@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    //'@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    //'@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  //axios: {
  //},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // to transform link with <nuxt-link> for the htmlSerializer
      /*config.resolve.alias['vue'] = 'vue/dist/vue.common'
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }*/
    },

    /*
    "html.minify": {
      preserveLineBreaks: true,
      minifyCSS: false,
      minifyJS: false,
    }*/
  },

  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  }
}
