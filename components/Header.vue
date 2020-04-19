<template>
  <header id="main-header">
    <div class="loading" v-if="loading">
      <p>Loading...</p>
    </div>
    <div class="site-branding">
      <div class="wrap">
        <div class="site-branding-text">
          <h1 class="site-title">ioanb7</h1>
          <p class="site-description">ioan biticu&#039;s website</p>
        </div><!-- .site-branding-text -->
      </div><!-- .wrap -->
    </div><!-- .site-branding -->
    <div id="avatar">&nbsp;</div>

    <!-- todo: use routes -->
    <nav id="main-nav">
      <nuxt-link to="/"><svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>Home</nuxt-link>
      <nuxt-link to="/about/"><svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>About</nuxt-link>
      <nuxt-link to="/contact/"><svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>Contact</nuxt-link>

    </nav><!-- #site-navigation -->
  </header>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    name: 'Header',
    computed: {
      ...mapGetters(['loading'])
    }
  }

</script>

<style scoped>
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    line-height: 2em;
    font-size: 30px;
    font-family: sans-serif;
    z-index: 100;
  }

</style>
