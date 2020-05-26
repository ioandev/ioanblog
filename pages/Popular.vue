<template>
  <Container :isOnly="true">
    <template v-slot:header>
      <h1 class="text-6xl font-black leading-15">
        Popular posts
      </h1>
    </template>
    <template v-slot:content>
      <PopularPosts />
    </template>
  </Container>
</template>

<script>
  import Container from '~/components/Container.vue'
  import PopularPosts from '~/components/PopularPosts.vue'
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Popular',
    components: {
      PopularPosts,
      Container
    },
    head() {
      return {
        title: 'ioan\'s blog popular posts',
        bodyAttrs: {
          class: 'popular pages'
        }
      }
    },
    mounted() {
      this.$nuxt.$store.commit("setLoading", false)
    }
  })

</script>

<style lang="css">

</style>
