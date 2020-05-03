<template>
  <article :class="extraClass + ' container p-10'">
    <header class="entry-header">
      <slot name="header" />
    </header>


    <div v-if="thumbnail" :class="{
          'post-thumbnail': !isOnly,
          'single-featured-image-header': isOnly
          }">
      <img width="960" height="540" :src="thumbnail" class="" :alt="thumbnailCaption">
    </div>

    <div class="leading-8 content_html" :class="{
          content: !isOnly,
          'entry-content': isOnly
          }">
      <translated-content :contentJson="contentJson">
        <slot name="content" />
      </translated-content>
    </div>
  </article>

</template>

<script>
  import TranslatedContent from './TranslatedContent'
  export default {
    components: {
      TranslatedContent
    },
    props: {
      "isOnly": {
        type: Boolean,
        default: false
      },
      "extraClass": {
        type: String,
        default: ""
      },
      "thumbnail": {
        type: String,
        default: ""
      },
      "thumbnailCaption": {
        type: String,
        default: ""
      },
      "contentJson": {
        type: Object,
        default: () => {}
      },
    },
  }

</script>

<style lang="scss">
  .content_html {
    //overflow-x: scroll;

    p {
      margin: 20px 0px 0px;
    }
  }

  .container {
    background-color: white;
  }

</style>
