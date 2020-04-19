<template>
  <Container extraClass="post type-post" :isOnly="isOnly" :thumbnail="thumbnail" :thumbnailCaption="thumbnailCaption">
    <template v-slot:header>
      <h2 v-if="!isOnly" class="entry-title">
        <nuxt-link :to="generateUri(blogArticle.slug)">
          {{convertToTxt(blogArticle.title)}}
        </nuxt-link>
      </h2>
      <h1 v-else class="entry-title">
        {{convertToTxt(blogArticle.title)}}
      </h1>
    </template>
    <template v-slot:content>
      <div v-html="blogArticle.html" />
    </template>
  </Container>
</template>

<script>
  const htmlToText = require('html-to-text');
  import Container from '~/components/Container.vue'
  export default {
    name: 'blog-article',
    components: {
      Container
    },
    props: {
      "blogArticle": Object,
      "isOnly": {
        type: Boolean,
        default: false
      }
    },
    computed: {
      thumbnail() {
        let thumbnail = this.getThumbnail()
        return thumbnail ? thumbnail.details.full.url : ""
      },
      thumbnailCaption() {
        let thumbnail = this.getThumbnail()
        return thumbnail ? thumbnail.caption : ""
      }
    },
    methods: {
      convertToTxt(html) {
        return htmlToText.fromString(html)
      },
      generateUri(uid) {
        return `/${uid}/`
      },
      getThumbnail() {
        let blogArticle = this.blogArticle
        if (blogArticle.thumbnails && blogArticle.thumbnails[0] && blogArticle.thumbnails[0].details.full) {
          return blogArticle.thumbnails[0]
        }
        return null
      }
    }
  }

</script>
