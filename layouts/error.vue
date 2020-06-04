<template>
  <Container extraClass="page type-page" :isOnly="true">
    <template v-slot:header>
      <h1 v-if="error.statusCode >= 400 && error.statusCode < 500 && error.message">{{error.message}}</h1>
      <h1 v-else-if="error.statusCode >= 400 && error.statusCode < 500">Page not found</h1>
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
    layout: 'blog',
    components: {
      Container
    },
  }

</script>
