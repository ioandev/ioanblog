<template>
  <div class="mb-0 md:mb-20">
    <BlogArticle v-if="isPost" :blogArticle="post" :isOnly="true" />
    <ConversationWrapper v-else :contents="conversation" :few="false" />
  </div>
</template>

<script>
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  import BlogArticle from '~/components/BlogArticle.vue'
  import ConversationWrapper from '~/components/ConversationWrapper'
  export default {
    name: 'PostSlug',
    //manual: true,
    components: {
      BlogArticle,
      ConversationWrapper
    },
    head() {
      return {
        title: (this.post ? (this.post.title) : (this.conversation.title)) + ' - ioan',
        bodyAttrs: {
          class: 'page'
        },
      }
    },
    computed: {
      ...mapGetters(['allPosts', 'allConversations']),

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
      if (this.post != null) {
        this.$nuxt.$store.commit('setPageType', this.post.isPost ? 'post' : 'page')
      } else {
        this.$nuxt.$store.commit('setPageType', 'conversation')
      }
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

        let thisConversation = null

        if (thisPost == null) {
          store.getters.allConversations.forEach(result => {
            if ((result.uri + "") == params.slug) {
              thisConversation = result
            }
          })
        }

        if (thisPost == null && thisConversation == null) {
          throw "Not found"
        }

        return {
          post: thisPost,
          conversation: thisConversation,
          isPost: thisPost != null
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
