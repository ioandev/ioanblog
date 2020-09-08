<template>
  <aside id="secondary" class="widget-area hidden md:block" role="complementary">
    <section id="text-2" class="widget widget_text border-b-1 border-gray-400 px-6 py-8 pb-1">
      <h2 class="text-xl border-b-2 border-gray-300 font-thin">ioan</h2>
      <div class="textwidget space-y-4 py-2">
        <p>I love creating websites that make an impact on people's lives.</p>
        <p>On this blog you'll find a few articles on programming I couldn't fit anywhere else, and a few articles on what is currently occupying my mind.</p>
        <p>Blog posts for making your own website better are available on Next View's blog.</p>
        <p><a href="https://nextview.dev" target="_blank" class="bg-blue-700 text-white py-4 px-2 block text-center">Check out Next View</a></p>
      </div>
    </section>
    <!--
    <section class="widget border-b-1 border-gray-400 px-6 py-8 pb-1">
      <h2 class="text-xl border-b-2 border-gray-300 font-thin">Newsletter</h2>
      <NewsletterForm />
    </section>
    -->
    <section class="widget popular-posts border-b-1 border-gray-400 px-6 py-8 pb-1">
      <h2 class="text-xl border-b-2 border-gray-300 font-thin">Popular posts</h2>
      <PopularPosts />
    </section>
  </aside>
</template>

<script>
  import PopularPosts from './PopularPosts'
  import NewsletterForm from './NewsletterForm'
  import {
    mapGetters
  } from 'vuex'
  import axios from 'axios'
  export default {
    name: 'Sidebar',
    components: {
      PopularPosts,
      NewsletterForm
    },
    data() {
      return {}
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
