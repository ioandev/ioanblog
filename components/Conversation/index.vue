<template>
  <div class="conversation bg-white" style="max-width:720px; margin:0 auto;">
    <message :message="message" v-for="message in justAFew(contents.messages)" :cutoff="isCutOff(message)"
      :key="message.id" />
    <div v-if="few">
      <div class="opacity-50">
        <message :message="contents.messages[howManyThen(contents.messages)[1]-1]" />
      </div>
      <p class="text-center py-6"><a :href="'/' + contents.uri + '#continue'" class="underline text-xs">
          Read {{(contents.messages.length - howManyThen(contents.messages)[0])}} more message(s) and then reply..</a>
      </p>
    </div>
    <div v-if="!few">
      <reply-back :conversationId="contents.uri" :callback="replyCallback" />
    </div>
  </div>
</template>

<script>
  import message from './message'
  import replyBack from './replyBack'
  import {
    mapGetters
  } from 'vuex'
  export default {
    props: {
      "contents": Object,
      "few": Boolean
    },
    components: {
      message,
      replyBack
    },
    methods: {
      justAFew(list) {
        if (this.few) {
          return [...list].splice(0, this.howManyThen(list)[0])
        }
        return list;
      },
      howManyThen(list) {
        return [this.contents.cutOffAfterNthLine, this.contents.cutOffAfterNthLine + 1]
      },
      replyCallback(conversationId, replyMessage) {
        debugger
      },
      isCutOff(message) {
        if (this.few) {
          return false;
        }

        return message.id == this.contents.cutOffAfterNthLine;
      }
    }
  }
</script>

<style>
  .conversation * {
      font-family: 'Montserrat', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
      word-spacing: 1px;
      font-size:16px;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
  }
</style>
