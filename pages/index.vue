<template>
  <div>
    <client-only>
      <masonry :cols="{default: 4, 2500: 3, 2000: 2, 1300: 1}" :gutter="{default: '0x', 700: '0px'}"
        columnClass="masonry-column">
        <template v-for="(smth, index) in all">
          <div class="" :key="index">
            <BlogArticle v-if="smth.type == 'blog'" :blogArticle="smth.content" />
            <div v-else>
              <ConversationWrapper :contents="smth.content" :few="true" />
            </div>
          </div>
        </template>

      </masonry>
<!--
      <template v-for="(post, index) in posts" slot="placeholder">
        <div class="" :key="index + '-index-blog-post'">
          <BlogArticle :blogArticle="post" />
        </div>
      </template>
      -->
    </client-only>
    <p v-if="all && all.length == 0">There is an issue trying to connect to the server.</p> <!-- TODO: style this. -->
  </div>
</template>

<script>
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  import BlogArticle from '~/components/BlogArticle.vue'
  import ConversationWrapper from '~/components/ConversationWrapper'
  import moment from 'moment'
  import axios from 'axios'
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Home',
    layout: 'homepage',
    components: {
      BlogArticle,
      ConversationWrapper,
    },
    head() {
      return {
        title: 'ioan\'s blog',
        bodyAttrs: {
          class: 'homepage'
        }
      }
    },
    mounted() {
      this.$nuxt.$store.commit("setLoading", false)
    },
    computed: {
      ...mapGetters(['allPosts']),
      ...mapGetters(['allConversations']),
      all() {
        const posts = this.allPosts.filter((post) => post.isPost)
        const conversations = this.allConversations

        let combined = [...posts, ...conversations]
        let combinedSorted = combined.sort((a, b) => {
          return !moment(a.created_at).isAfter(b.created_at) ? 1 : -1
        })

        let combinedAndWithType = combinedSorted.map(x => {
          let foundOne = conversations.some((item) =>{
            return x.uri != undefined && item.uri == x.uri
          });

          return {
            content: x,
            type: foundOne ? 'conversation' : 'blog'
          }
        })

        return combinedAndWithType

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
