<template>
  <div>
    <template v-for="(post, index) in posts" v-key="index">
      <BlogArticle :blogArticle="post" />
    </template>
  </div>
</template>

<script lang="ts">
  import {
    mapGetters,
    mapMutations
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
    mounted() {
      //console.log("Mounted!")
      //debugger; // eslint-disable-line
      //this.$nuxt.$loading.end()
      //debugger
      //this.setLoading(false)
      this.$nuxt.$store.commit("setLoading", false)
      let timerName = "load"
      console.timeEnd(timerName)
    },
    computed: {
      ...mapGetters(['allPosts']),
      posts() {
        return this.allPosts.filter((post: any) => post.isPost)
      }
    },
    async asyncData({
      store,
      params,
      error
    }) {
      store.commit('setPageType', 'homepage')
    },
    methods: {
      ...mapMutations(['setLoading', 'setPageType'])
    }
  })

</script>
