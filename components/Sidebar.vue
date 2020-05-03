<template>
  <aside id="secondary" class="widget-area" role="complementary">
    <section id="text-2" class="widget widget_text border-b-1 border-gray-400 px-2 py-5">
      <h2 class="text-xl border-b-2 border-gray-300">ioanb7</h2>
      <div class="textwidget">
        <p>I'm Ioan Biticu and I'm a software developer.</p>
        <p>Check out my youtube channel at /ioanb7.</p>
      </div>
    </section>

    <section class="widget popular-posts border-b-1 border-gray-400  px-2 py-5">
      <h2 class="text-xl border-b-2 border-gray-300">Popular posts</h2>
      <ul class="">
        <li v-for="popularPost in popularPosts" :key="popularPost.slug" class="py-1">
          <nuxt-link :to="'/' + popularPost.slug +  '/'" :title="popularPost.title" class="py-1" target="_self">
            {{popularPost.title}}</nuxt-link>
          <span class="post-stats"><span class="">{{popularPost.pageviews}} views</span></span>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import axios from 'axios'
  export default {
    name: 'Sidebar',
    computed: {
      ...mapGetters(['popularPosts']),
    },

  }

</script>
