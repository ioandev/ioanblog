<template>
  <div>
    <template v-for="(post, index) in posts" v-key="index">
      <BlogArticle :blogArticle="post" />
    </template>
  </div>
</template>

<script lang="ts">
  import {
    mapGetters
  } from 'vuex'
  import BlogArticle from '~/components/BlogArticle.vue'
  import axios from 'axios'
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Home',
    layout: 'homepage',
    components: {
      BlogArticle,
    },
    head() {
      return {
        title: 'ioanb7\'s blog',
      }
    },
    computed: {
      ...mapGetters(['allPosts']),
      posts() {
        return this.allPosts.filter((post: any) => post.isPost)
      }
    }
  })

</script>
