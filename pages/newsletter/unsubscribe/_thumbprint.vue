<template>
  <Container :isOnly="true">
    <template v-slot:header>
      <h1 class="text-6xl font-black leading-15">
        Your Email has been unsubscribed.
      </h1>
    </template>
    <template v-slot:content>
      Sorry to see you go.
    </template>
  </Container>
</template>

<script>
  export default {
    name: 'NewsletterUnsubscribe',
    components: {},
    head() {
      return {
        title: 'Email unsubscribed - ioan',
        bodyAttrs: {
          class: 'page'
        },
      }
    },
    data() {
      return {}
    },
    async asyncData({
      params,
      error,
      $axios
    }) {
      if (!process.server) {
        error({
          statusCode: 404,
          message: 'How did you get here?'
        })
        return {}
      }
      try {
        const url = "http://127.0.0.1:4178" + "/api/newsletter/unsubscribe"
        console.log(`thumbprint: ${params.thumbprint}`)
        await $axios.get(url, {
          params: {
            thumbprint: params.thumbprint
          }
        })
      } catch (e) {
        console.error(e)
        // Returns error page
        error({
          statusCode: 404,
          message: 'Page not found'
        })
      }
    }
  }

</script>
