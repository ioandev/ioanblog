<template>
  <Container extraClass="page type-page" :isOnly="true">
    <template v-slot:header>
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
    </template>
    <template v-slot:content>
      <div>
        <nuxt-link to="/">Home page</nuxt-link>
      </div>
    </template>
  </Container>
</template>

<script>
  import Container from '~/components/Container.vue'
  export default {
    props: ['error'],
    layout: 'blog', // you can set a custom layout for the error page
    components: {
      Container
    },
  }

</script>
