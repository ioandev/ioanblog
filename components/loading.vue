<template>
  <div id="loading-artifact" class="hidden">&nbsp;</div>
</template>

<script>
  import {
    mapMutations
  } from 'vuex'
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      ...mapMutations(['setLoading']),
      start() {
        //debugger; // eslint-disable-line
        //this.loading = true
        this.setLoading(true)
      },
      finish(asd) {
        // TODO: check for error.
        //debugger; // eslint-disable-line
        //this.loading = false
      }
    }
  }

</script>

<style lang="scss">
  .loading-artifact {}

</style>
