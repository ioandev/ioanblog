<template>
  <aside id="secondary" class="widget-area hidden md:block" role="complementary">
    <section id="text-2" class="widget widget_text border-b-1 border-gray-400 px-6 py-8 pb-1">
      <h2 class="text-xl border-b-2 border-gray-300 font-thin">ioanb7</h2>
      <div class="textwidget">
        <p class="py-2">I'm Ioan Biticu and I'm a software developer.</p>
        <p class="py-2">Check out my youtube channel at /ioanb7.</p>
      </div>
    </section>
    <section class="widget popular-posts border-b-1 border-gray-400 px-6 py-8 pb-1">
      <h2 class="text-xl border-b-2 border-gray-300 font-thin">Popular posts</h2>
      <PopularPosts />
    </section>
  </aside>
</template>

<script>
  import PopularPosts from './PopularPosts'
  import {
    mapGetters
  } from 'vuex'
  import axios from 'axios'
  export default {
    name: 'Sidebar',
    components: {
      PopularPosts
    },
    computed: {
      ...mapGetters(['popularPosts']),
    },

  }

</script>

<style lang="scss" scoped>
  a.nuxt-link-exact-active {
    text-decoration: underline;
  }

</style>
