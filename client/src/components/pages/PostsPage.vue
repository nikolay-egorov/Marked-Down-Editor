<template lang="pug">
.container
   .row
      .col-md-9
        h1
          | Posts
        h3
          | Здесь будут показаны все посты
        div
          router-link( :to="{ name: 'NewPost' }" )
             | Добавить

        section.panel.panel-success( v-if="posts.length" )
          .panel-heading
            | Список постов
          table.table.table-striped
            tr
              th Название
              th(align="center") Описание
              th(width="200") Действие
            tr( v-for="(post, index) in posts", :key="post.title" )
              td {{ post.title }}
              td {{ post.description }}
              td(align="center")
               router-link( :to="{ name: 'EditPost', params: { id: post._id } }" )
                  | Изменить
               a( href='#', @click='removePost(post._id)' )
                  |  Удалить

        section.panel.panel-danger( v-if="posts.length<1" )
          p
            | Здесь ничего нет ... Исправим это!
          div
            router-link( :to="{ name: 'NewPost' }" )
              | Добавить новый пост


</template>

<script>
  import PostsService from "@/services/PostsService"

  export default {
    name: 'PostsPage',
    data() {
      return {
        posts: []
      }
    },
    methods: {
      async getPosts() {
        const response = await PostsService.fetchPosts()
        this.posts = response.data.posts
        console.log(this.posts)
      },
      async removePost (value) {
        await PostsService.deletePost(value)
        this.getPosts()
      }
    },

    mounted() {
      this.getPosts()
    }
  }
</script>
