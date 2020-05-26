<template>
  <div>
    <Header />
    <section class="flex flex-auto">
      <main id="main" class="flex-1 min-w-0" role="main">
        <nuxt />
      </main>
      <Sidebar class="flex-sidebar min-w-0" />
    </section>

    <div id="second-nav">
      <ul class="list-reset flex flex-row md:flex-col text-center md:text-left">
        <li class="mr-3 flex-1" v-for="link in links" :key="link.name">
          <nuxt-link :to="link.to"
            class="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline hover:text-pink border-b-2 border-grey-darkest md:border-black hover:border-pink">
            <i class="material-icons pr-0 md:pr-3">{{link.icon}}</i>
            <span
              class="pb-1 md:pb-0 text-xs md:text-base text-grey-dark md:text-grey-light block md:inline-block">{{link.name}}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!--Sidebar-->
    <div
      class="w-full md:w-1/5 bg-black md:bg-black px-2 text-center fixed pin-b md:pt-8 md:pin-t md:pin-l h-16 md:h-screen md:border-r-4 md:border-grey-dark">
      <div class="md:relative mx-auto lg:float-right lg:px-6">

      </div>
    </div>
    <Footer />
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
        title: 'ioanb7\'s blog',
      }
    },
    data() {
      return {
        'links': [{
            'name': 'Home',
            'icon': 'home',
            'to': '/'
          },
          {
            'name': 'About',
            'icon': 'info',
            'to': '/about/'
          },
          {
            'name': 'Contact',
            'icon': 'email',
            'to': '/contact/'
          },
          {
            'name': 'Popular',
            'icon': 'favorite',
            'to': '/popular/'
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
    padding: 1.250em;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    overflow: hidden;
    box-sizing: border-box;
    z-index: 9999;
    width: 100%;
    display: flex;
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
