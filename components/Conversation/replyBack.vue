<template>
  <div>
    <!--
    <p>
      Hey, I got your message. Put your e-mail below so I can send you the response.
    </p>-->
    <form class="m-2 mt-4 flex">
      <input
        class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight h-12 focus:outline-none focus:shadow-outline text-xs"
        style="border-radius: 1rem;" id="username" type="text" placeholder="Write a reply.." v-model="replyMessage">
      <button @click.prevent="submitX" class="shadow appearance-none border ml-2 py-2 px-3 leading-tight h-12 focus:outline-none text-gray-500 hover:text-white hover:bg-blue-800
          focus:shadow-outline" style="border-radius: 1rem;">Send</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ["conversationId", "callback"],
    data() {
      return {
        replyMessage: ""
      }
    },
    methods: {
      submitX() {
        axios.post("", {

        }).then((p => {
          this.callback(this.conversationId, this.replyMessage)
          throw "Not implemented yet, this is just an MVP."
        })).catch((e) => {
          alert(`An error has occured: ${e}`)
        })
      }
    }
  }
</script>

<style>

</style>
