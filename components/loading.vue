<template lang="html">
  <div></div>
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
        let timerName = "load"
        console.time(timerName)
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
