<template lang="pug">
.container
  .row
    .col-md-9
      h1
        |{{post.title}}
      .ul(class="list-inline"
        .li
          .i(class="glyphicon glyphicon-calendar")
            | {{dateFormat(post.postTime)}}
      hr
        .div(id="content" class="markdown-body")

    .col-md-3
.p
  router-link( :to="{ name: 'Posts'}")
    | На главную
</template>

<script>
  import PostsService from '@/services/PostsService'
  import { dateFormat } from "../util"

  export default {
    data: function () {
      return {
        post: {
          title: '',
          description: '',
          postTime: 0
        }
      }
    },
    methods: {
      async getPost() {
        const response = await PostsService.getPost({id: this.$route.params.id})
        this.post.title = response.data.title
        this.post.description = response.data.description
        this.post.postTime = response.data.postTime
        this.initMarkdown()
      },
      initMarkdown: function() {
        document.getElementById("content").innerHTML = toHTML(
          this.post.description
        );
      },
    }
  }
</script>

<style scoped>

</style>
