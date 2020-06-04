<template>
  <Container :isOnly="true">
    <template v-slot:header>
      <h1 class="text-6xl font-black leading-15">
        Your Email has been confirmed.
      </h1>
    </template>
    <template v-slot:content>
      Welcome! You'll hear from me soon.
    </template>
  </Container>
</template>

<script>
  export default {
    name: 'NewsletterConfirm',
    components: {},
    head() {
      return {
        title: 'Email confirmed - ioan',
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
        const url = process.env.NEWSLETTER_URL + "/api/newsletter/confirm"
        console.log(url)
        let response = await $axios.get(url, {
          thumbprint: params.thumbprint
        })
        console.log(response)
      } catch (e) {
        if (e.response && e.response.data && e.response.data.error) {
          console.error(e.response.data.error)
          error({
            statusCode: 400,
            message: e.response.data.error
          })
          return
        }

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
