<template>
  <Container :isOnly="true">
    <template v-slot:header>
      <h1 class="text-6xl font-black leading-15">
        Newsletter
      </h1>
    </template>
    <template v-slot:content>
      <NewsletterForm />
    </template>
  </Container>
</template>

<script>
  import Container from '~/components/Container.vue'
  import NewsletterForm from '~/components/NewsletterForm'
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Newsletter',
    components: {
      NewsletterForm,
      Container
    },
    head() {
      return {
        title: 'ioan\'s newsletter',
        bodyAttrs: {
          class: 'newsletter pages'
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
