<template>
  <div>
    <div v-if="!submitted">
      <p class="py-2">Psst, subscribe to my newsletter for some great <i>knowledge</i></p>

      <form @submit.prevent="handleSubmit" class="">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="newsletter-name">
            Your name
          </label>
          <input id="newsletter-name" type="text" minlength="3" required="" placeholder="Alexa"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" v-model="name">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="newsletter-email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="newsletter-email" type="email" placeholder="alexa@amazon.com" v-model="email">
        </div>
        <div class="flex">
          <input type="checkbox" id="newsletter-approve" v-model="approved" required="" class="m-2">
          <label for="newsletter-approve">Yes, sign me up for Ioan's free email newsletter.</label>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            type="submit">
            Get access
          </button>
        </div>
      </form>
    </div>
    <div v-else>
      <p class="py-2">Great! You'll get an e-mail soon to confirm your subscription.</p>
      <p class="py-2">Check your spam (just in case)</p>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import axios from 'axios'
  export default {
    name: 'NewsletterForm',
    data() {
      return {
        name: "",
        email: "",
        submitted: false,
        approved: false
      }
    },
    methods: {
      async handleSubmit() {
        if (!this.approved) {
          return;
        }
        try {
          let response = await this.$axios.post("https://ioan.blog/api/newsletter/subscribe", {
            name: this.name,
            email: this.email
          })

          this.submitted = true
        } catch (ex) {
          console.error(ex)
          console.error(ex.data)
          alert("An error has occured, and we are aware of it")
        }
      }
    }
  }

</script>
