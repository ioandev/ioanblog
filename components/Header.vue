<template>
  <div>
    <header id="main-header" class="hidden md:block">
      <!--
    <div class="loading" v-if="loading">
      <p>Loading...</p>
    </div>
    -->
      <transition-group name="bk" tag="div" class="bk-img">
        <div key="img1" v-if="pageType === 'homepage'" class="header-img1"></div>
        <div key="img2" v-else-if="pageType === 'post'" class="header-img2"></div>
        <div key="img3" v-else-if="pageType === 'page'" class="header-img3"></div>
        <div key="img4" v-else class="header-img4"></div>
      </transition-group>

      <div class="inline-block absolute p-12 pt-4 mt-4 text-white">
        <div class="wrap">
          <div class="site-branding-text">
            <h1 class="site-title text-6xl tracking-tighter font-light -mb-4">ioan</h1>
            <p class="site-description">ioan biticu&#039;s website</p>
          </div><!-- .site-branding-text -->
        </div><!-- .wrap -->
      </div><!-- .site-branding -->
      <div id="avatar">&nbsp;</div>

      <nav id="main-nav" class="hidden lg:block">
        <nuxt-link to="/"><svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>Home</nuxt-link>
        <nuxt-link to="/about/"><svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>About</nuxt-link>
        <nuxt-link to="/contact/"><svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>Contact</nuxt-link>
      </nav><!-- #site-navigation -->
    </header>
    <header id="alternative-header" class="block md:hidden">
      <nuxt-link to="/" class="m-4 p-4 inline-block">Home</nuxt-link>
    </header>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    name: 'Header',
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['loading', 'pageType'])
    }
  }

</script>

<style scoped lang="scss">
  #main-header {
    height: 260px;
    overflow: hidden;
    position: relative;
  }

  .bk-img {
    position: absolute;
    width: 100vw;
    height: 100%;
    overflow: hidden;
    top: 0;
  }

  @mixin header2 ($imgurl) {
    background: url($imgurl) center center;
    background-size: cover;
    position: absolute;
    width: 100vw;
    height: 100%;
  }

  .header-img1 {
    @include header2('/assets/img/header1.jpg');
  }

  .header-img2 {
    @include header2('/assets/img/header2.jpg');
  }

  .header-img3 {
    @include header2('/assets/img/header3.jpg');
  }

  .header-img4 {
    @include header2('/assets/img/header4.jpg');
  }

  .bk-enter-active,
  .bk-leave-active {
    transition: all 0.4s ease;
  }

  .bk-enter,
  .bk-leave-to {
    transform: scale(1.1) translateZ(0);
    opacity: 0;
  }



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


  #alternative-header {
    background-color: white;
  }

  #alternative-header a {
    border: 1px solid black;
  }

  .homepage #main-header {
    display: block !important;
  }

  .homepage #alternative-header {
    display: none !important;
  }

</style>
