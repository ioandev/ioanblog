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

    <div class="leading-8 content_html p-10" :class="{
          content: !isOnly,
          'entry-content': isOnly
          }">
      <translated-content :contentJson="contentJson" v-if="contentJson">
        <slot name="content" />
      </translated-content>
      <slot name="content" v-else />
    </div>
    <div class="spacer"></div>
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

  .spacer {
    min-width: 0;
    background: url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>');
    background-size: 1em 1em;
    padding-left: 3px;
    height: 2px;
    width: 100%;
  }

</style>
