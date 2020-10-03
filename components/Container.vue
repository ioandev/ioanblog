<template>
  <article :class="extraClass + ' container-ioan'">
    <header class="entry-header p-10 pb-0">
      <slot name="header" />
    </header>


    <div v-if="thumbnail" :class="{
          'post-thumbnail': !isOnly,
          'single-featured-image-header': isOnly
          }" class="p-10 pb-0">
      <img width="960" height="540" :src="thumbnail" class="" :alt="thumbnailCaption">
    </div>

    <div class="leading-8 p-10" :class="{
          content: !isOnly,
          'entry-content': isOnly,
          'content-html': contentJson != undefined
          }">
      <translated-content :contentJson="contentJson" v-if="contentJson">
        <slot name="content" />
      </translated-content>
      <slot name="content" v-else />
    </div>
    <div :class="{
      'spacer': !isOnly
    }"></div>
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
    border: 1px solid #ccc;
  }

  .container-ioan .content_html h2 {
    line-height: 1.2em;
    font-size: 3.2em;
    margin: 20px 0px;
  }

  .container-ioan .content_html h3 {
    line-height: 1.2em;
    font-size: 2.4em;
    margin: 20px 0px;
  }

  .container-ioan {
    background-color: white;
  }

</style>
