<template>
  <Container :isOnly="!few" :extraClass="!few ? 'container border-0 mx-auto' : ''">
    <template v-slot:header>
      <h2 v-if="few" class="text-6xl font-black leading-15">
        <nuxt-link :to="'/' + contents.uri">
          {{contents.title}}
        </nuxt-link>
      </h2>
      <h1 v-else class="text-6xl font-black leading-15 text-center">
        {{contents.title}}
      </h1>
    </template>
    <template v-slot:content>
      <Conversation :contents="contents" :few="few" />
    </template>
  </Container>
</template>

<script>
  import Container from '~/components/Container.vue'
  import Conversation from '~/components/Conversation'
  export default {
    name: 'conversation-wrapper',
    props: {
      "contents": Object,
      "few": Boolean
    },
    components: {
      Container,
      Conversation
    },
    mounted() {
      if (location.hash != "" && location.hash != undefined && location.hash.length > 1) {
        const el = document.getElementById(location.hash.substr(1));
        if (el == null) return;
        el.scrollIntoView({behavior: "smooth"});
      }
    }
  }
</script>

<style>

</style>
