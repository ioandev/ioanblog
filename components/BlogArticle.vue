<template>
  <Container :isOnly="isOnly" :thumbnail="thumbnail" :thumbnailCaption="thumbnailCaption" :contentJson="blogArticleJson"
    extraClass="container">
    <template v-slot:header>
      <h2 v-if="!isOnly" class="text-6xl font-black leading-15">
        <nuxt-link :to="generateUri(blogArticle.slug)">
          {{blogArticle.title}}
        </nuxt-link>
      </h2>
      <h1 v-else class="text-6xl font-black leading-15">
        {{blogArticle.title}}
      </h1>
    </template>
    <template v-slot:content>
      <p>Couldn't find any content.</p>
    </template>
  </Container>
</template>

<script>
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
      },
      blogArticleJson() {
        return this.blogArticle.json
      }
    },
    methods: {
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

<style>

</style>
