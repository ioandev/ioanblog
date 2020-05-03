<template>
  <BlogArticle :blogArticle="post" :isOnly="true" />
</template>

<script>
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  import BlogArticle from '~/components/BlogArticle.vue'
  export default {
    name: 'PostSlug',
    //manual: true,
    components: {
      BlogArticle,
    },
    head() {
      return {
        title: this.post.title + ' - ioanb7',
        bodyAttrs: {
          class: ''
        },
      }
    },
    computed: {
      ...mapGetters(['allPosts']),
    },
    //validate: (asd) => {
    //debugger; // eslint-disable-line
    //this.$nuxt.$loading.start()
    //},
    mounted() {
      //console.log("Mounted!")
      //debugger; // eslint-disable-line
      //this.$nuxt.$loading.end()
      //debugger
      //this.setLoading(false)
      this.$nuxt.$store.commit('setPageType', this.post.isPost ? 'post' : 'page')
      this.$nuxt.$store.commit("setLoading", false)
    },
    async asyncData({
      store,
      params,
      error
    }) {
      try {
        let allResult = store.getters.allPosts

        let thisPost = null
        allResult.forEach(result => {
          if ((result.slug + "") == params.slug) {
            thisPost = result
          }
        })

        if (thisPost == null) throw "Not found"

        return {
          post: thisPost,
        }
      } catch (e) {
        console.error(e)
        // Returns error page
        error({
          statusCode: 404,
          message: 'Page not found'
        })
      }
    },
    methods: {
      ...mapMutations(['setLoading'])
    }
  }

</script>
