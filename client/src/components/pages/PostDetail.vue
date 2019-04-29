<template lang="pug">
.container
  .row
    .col-md-9
      h1
        |{{post.title}}

      .ul(class="list-inline")
        .li
          .i(class="oi oi-calendar")
            | Опубликовано: {{moment(post.postTime)}}
      hr
      br
      .div(id="content" class="markdown-body")

    .col-md-3
      .p
        router-link( :to="{ name: 'Posts' }" )
          | На главную


</template>

<script>
  import PostsService from '@/services/PostsService'
  import  moment  from 'moment'
  import {toHTML} from '@/utils.js'

  export default {
    data: function () {
      return {
        post: {
          title: '',
          description: '',
          postTime: null
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
      initMarkdown()  {
        document.getElementById("content").innerHTML = toHTML(
          this.post.description
        )
        document.getElementById("content").style.textAlign = "left"
      },
      moment:(date) => {
        return moment(date).locale("ru").format("DD MMM YYYY")
      }
    },
    mounted() {
      this.getPost()
    }
  }
</script>

