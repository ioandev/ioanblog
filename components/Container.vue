<template>
  <article :class="extraClass + 'status-publish format-standard has-post-thumbnail hentry category-uncategorized'">
    <header class="entry-header">
      <slot name="header" />
    </header>


    <div v-if="thumbnail" :class="{
          'post-thumbnail': !isOnly,
          'single-featured-image-header': isOnly
          }">
      <img width="960" height="540" :src="thumbnail"
        class="attachment-twentyseventeen-featured-image size-twentyseventeen-featured-image wp-post-image"
        :alt="thumbnailCaption">
    </div>

    <div :class="{
          content: !isOnly,
          'entry-content': isOnly
          }">
      <slot name="content" />
    </div>
  </article>

</template>

<script>
  export default {
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
    },
  }

</script>

<style lang="scss" scoped>

</style>
