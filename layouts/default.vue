<template>
  <div>
    <Header />
    <section class="flex flex-auto">
      <main id="main" class="flex-1 min-w-0" role="main">
        <nuxt />
      </main>
      <Sidebar class="flex-sidebar min-w-0" />
    </section>
    <Footer />

    <div id="second-nav" class="flex lg:hidden">
      <ul class="list-reset flex flex-row text-center">
        <li class="mr-3 flex-1" v-for="link in links" :key="link.name">
          <nuxt-link v-if="link.to" :to="link.to"
            class="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline hover:text-pink border-b-2 border-grey-darkest md:border-black hover:border-pink">
            <i class="material-icons pr-0">{{link.icon}}</i>
            <span class="pb-1 md:pb-0 text-xs text-grey-dark block">{{link.name}}</span>
          </nuxt-link>
          <a v-if="link.href" :href="link.href" target="_blank"
            class="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline hover:text-pink border-b-2 border-grey-darkest md:border-black hover:border-pink">
            <i class="material-icons pr-0">{{link.icon}}</i>
            <span class="pb-1 md:pb-0 text-xs text-grey-dark block">{{link.name}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="lg:hidden" style="height:75px; background-color:white; "></div>
  </div>
</template>

<script>
  // TODO: h1 on the main page?
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import Sidebar from '~/components/Sidebar.vue'
  import {
    mapActions
  } from 'vuex'
  export default {
    layout: "blog",
    components: {
      Header,
      Footer,
      Sidebar
    },
    head() {
      return {
        title: 'ioan\'s blog',
      }
    },
    data() {
      return {
        'links': [{
            'name': 'Blog',
            'icon': 'home',
            'to': '/'
          },
          {
            'name': 'About',
            'icon': 'info',
            'href': 'https://ioan.dev'
          },
          {
            'name': 'Contact',
            'icon': 'email',
            'href': 'https://ioan.dev'
          },
          {
            'name': 'Popular',
            'icon': 'favorite',
            'to': '/popular'
          },
          {
            'name': 'Next View',
            'icon': 'business',
            'href': 'https://nextview.dev'
          },
        ]
      }
    },
    async asyncData() {
      return this.setUp()
    },
    methods: {
      ...mapActions(['setUp'])
    }
  }

</script>

<style lang="scss">
  #second-nav {
    background: #424851;
    color: #fff;
    padding: 0.25em;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    overflow: hidden;
    box-sizing: border-box;
    z-index: 9999;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
    flex-direction: column;
    width: 100%;
  }

  #second-nav ul {
    width: 100%;
  }

  #second-nav a {
    border-bottom: 0px;
  }

  $hoverColor: #63AE19;

  #second-nav a.nuxt-link-exact-active {
    color: $hoverColor;
    border-bottom: 4px solid $hoverColor;
  }

</style>
