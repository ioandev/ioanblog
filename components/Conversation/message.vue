<template>
  <div :id="cutoff ? 'continue' : ''">
    <div class="mb-1 clearfix">
      <p v-if="message.meta.showTime" class="uppercase text-gray-500 text-center my-4 text-xs"
        :class="classesForDateTimeMt" :title="$moment(message.time).format('D MMM YYYY, H:mm')">
        <span v-if="message.meta.showDate && message.meta.showTime">
          {{$moment(message.time).format('D MMM YYYY, H:mm')}}
        </span>
        <span v-else-if="message.meta.showTime">
          {{$moment(message.time).format('ddd H:mm')}}
        </span>
      </p>
      <p class="my-8" v-if="!message.meta.showTime && message.meta.didSpeakerChange">

      </p>
      <p class="my-1" v-if="!message.meta.showTime && !message.meta.didSpeakerChange">

      </p>

      <div :class="!message.meta.me ? 'float-right' : ''">
        <p class="text-xs px-4 uppercase text-gray-500 w-full md:w-4/5" v-if="message.meta.showName">
          {{message.meta.name}}
        </p>

        <div :class="classesForThis + (message.data.img ? ' inline-block' : '')"
          style="max-width:420px; border-radius: 1rem;">
          <img :data-src="message.data.img" :alt="message.data.text" v-if="message.data.img" class="my-2 inline-block "
            style="border-radius: 1rem;" v-lazy-load />

          <p v-html="message.data.text" v-linkified class="messageContent" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: ["message", "cutoff"],
    computed: {
      classesForThis() {
        let baseClasses = 'p-2 px-4 rounded-md mx-2 my-0 text-sm'

        if (!this.message.data.img) {
          baseClasses + ' w-full'
        }

        if (!this.message.meta.me) {
          return baseClasses + ' bg-blue-700 text-white mr-2'
        }
        return baseClasses + ' bg-gray-300 text-gray-800 ml-2'
      },
      classesForDateTimeMt() {
        if (this.message.meta.didSpeakerChange) {
          return ' mt-4'
        }
        return ''
      }

    }
  }
</script>

<style lang="scss">
  .messageContent a {
    @apply underline;
  }
</style>
