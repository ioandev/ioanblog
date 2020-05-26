<template>
  <div>
    <client-only>
      <masonry :cols="{default: 4, 2500: 3, 2000: 2, 1300: 1}" :gutter="{default: '0x', 700: '0px'}"
        columnClass="masonry-column">
        <template v-for="(post, index) in posts">
          <div class="" :key="index">
            <BlogArticle :blogArticle="post" />
          </div>
        </template>
      </masonry>

      <template v-for="(post, index) in posts" slot="placeholder">
        <div class="" :key="index + 'xxx2'">
          <BlogArticle :blogArticle="post" />
        </div>
      </template>
    </client-only>
    <p v-if="posts.length == 0">There is an issue trying to connect to the server.</p> <!-- TODO: style this. -->
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
        bodyAttrs: {
          class: 'homepage'
        }
      }
    },
    mounted() {
      //console.log("Mounted!")
      //debugger; // eslint-disable-line
      //this.$nuxt.$loading.end()
      //debugger
      //this.setLoading(false)
      this.$nuxt.$store.commit("setLoading", false)
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

<style lang="css">
  body,
  .masonry-column,
  #secondary {
    /*
    /*transition: width 1s;*/
    min-width: 0;
    background: url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>');
    background-size: 1em 1em;
    height: 100%;
    padding-left: 3px;
  }

  body {
    padding-left: 0px;
  }

  .masonry-column:first-of-type {
    padding-left: 0px;
  }

  #secondary>section {
    background-color: white;
  }

</style>
