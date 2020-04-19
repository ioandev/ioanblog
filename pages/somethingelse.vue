<template>
  <Container extraClass="page type-page" :isOnly="isOnly">
    <template v-slot:header>
      <h1 class="entry-title">
        About
      </h1>
    </template>
    <template v-slot:content>
      <div>
        <p>I’m a software developer.</p>
        <p>&nbsp;</p>
        <h3>Summary:</h3>
        <ul>
          <li><strong>Nov 2016-Apr 2017</strong>: Built&nbsp;<a href="http://ioanb7.com/minedive-com/">minedive.com</a>
          </li>
          <li><strong>Aug 2016-Jul 2017</strong>: Full time Internship in <a
              href="http://www.digital.hull.ac.uk/team/">Digital Center</a>&nbsp;working with WPF and VR.</li>
          <li><strong>Jun-Sep 2015</strong>: Summer Internship&nbsp;University of Hull building <a
              href="https://www.youtube.com/watch?v=Hzi4e-DkMQU">Head-tracked stereo display board Kinect 360</a></li>
          <li><strong>Apr 2016</strong>: Won a <a
              href="http://www2.hull.ac.uk/hubs/news-events/news/2016-news/may-2016/pitching-to-dragons-den.aspx">pitch
              to
              dragons</a> at the University of Hull</li>
          <li><strong>2014</strong>:&nbsp;Started studying Computer Science at the University of Hull</li>
          <li><strong>Nov 2014-Apr 2015</strong>: Programming video tutorials available on the smallest displays with
            the
            minimum amount of data transferred over the network. Developed for Imagine Cup 2015, it was made out of a
            tutorial
            recorder (.NET audio recorder integrated with CodeMirror through WebSockets), and symfony2 for web/mobile
            access
          </li>
          <li><strong>Jun 2012</strong> – Freelanced my first project: <a
              href="http://web.archive.org/web/20120623154933/vremeape15zile.info">vremeape15zile.info</a></li>
          <li><strong>Sept 2011-Apr 2012</strong>: Won Web Development contest in my city building a digital Grade book
            system
            with <a href="https://symfony.com/">php symfony 2</a>.</li>
          <li><strong>2010</strong>: Started programming with the new technologies that were coming back then: HTML5 and
            CSS3.
            Soon after I started using PHP and everything just stacked from there on.</li>
        </ul>
        <p>&nbsp;</p>
        <p>I also did:</p>
        <ul>
          <li>3 game jams: 2014-2017.</li>
        </ul>

      </div>
    </template>
  </Container>
</template>

<script>
  import Container from '~/components/Container.vue'
  import {
    mapGetters
  } from 'vuex'
  import BlogArticle from '~/components/BlogArticle.vue'
  export default {
    name: 'Post',
    components: {
      Container
    },
    head() {
      return {
        title: 'Some post..',
        bodyAttrs: {
          class: 'post-template-default single single-page single-format-standard has-header-image has-sidebar colors-light'
        },
      }
    },
    computed: {
      ...mapGetters(['allPosts'])
    },
    async asyncData({
      store,
      params,
      error
    }) {
      try {
        console.log(store.getters)
        let allResult = store.getters.allPosts

        let thisPost = null
        allResult.forEach(result => {
          if ((result.slug + "") == params.slug) {
            thisPost = result
          }
        })

        return {
          post: thisPost,
        }
      } catch (e) {
        console.error(e)
        // Returns error page
        error({
          statusCode: 404,
          message: 'Page not found'
        })
      }
    },
  }

</script>
