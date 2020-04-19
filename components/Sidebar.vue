<template>
  <aside id="secondary" class="widget-area" role="complementary">
    <section id="text-2" class="widget widget_text">
      <h2 class="widget-title">ioanb7</h2>
      <div class="textwidget">
        <p>I'm Ioan Biticu and I'm a software developer.</p>
        <p>Check out my youtube channel at /ioanb7.</p>
      </div>
    </section>
    <section id="wpp-2" class="widget popular-posts">
      <h2 class="widget-title">Popular posts</h2>
      <ul class="wpp-list">
        <li v-for="popularPost in popularPosts" :key="popularPost.slug">
          <nuxt-link :to="'/' + popularPost.slug +  '/'" :title="popularPost.title" class="wpp-post-title"
            target="_self">{{popularPost.title}}</nuxt-link>
          <span class="post-stats"><span class="wpp-views">{{popularPost.pageviews}} views</span></span>
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
