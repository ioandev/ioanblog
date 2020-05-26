<template>
  <ul class="">
    <li v-for="popularPost in popularPosts" :key="popularPost.slug" class="py-2">
      <nuxt-link :to="'/' + popularPost.slug +  '/'" :title="popularPost.title" class="py-2 hover:underline"
        target="_self">
        {{popularPost.title}}</nuxt-link>
      <span class="post-stats text-sm font-semibold block">{{popularPost.pageviews}} views</span>
    </li>
  </ul>
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

<style lang="scss" scoped>
  a.nuxt-link-exact-active {
    text-decoration: underline;
  }

</style>
