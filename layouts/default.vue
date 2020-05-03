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
    async asyncData() {
      await this.setUp()
    },
    methods: {
      ...mapActions(['setUp'])
    }
  }

</script>
