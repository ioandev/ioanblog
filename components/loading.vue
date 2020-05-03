<template>
  <div id="loading-artifact">&nbsp;</div>
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
