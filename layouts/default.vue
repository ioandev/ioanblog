<template>
  <div>
    <Header />
    <section>
      <div id="content">
        <div id="articles" class="cf">
          <div class="wrap">
            <div id="primary" class="content-area">
              <main id="main" class="site-main cf" role="main">
                <nuxt />
              </main>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
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
