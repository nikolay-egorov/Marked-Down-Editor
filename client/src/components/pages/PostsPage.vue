<template lang="pug">
.container
   .row
      .col-xs-12
        h1
          | Posts
        h3
          | Здесь будут показаны все посты

        section.panel.panel-success( v-if="posts.length" )
          .panel-heading
            | Список постов
          table.table.table-striped
            tr
              th Название
              th Описание
              th Автор
            tr( v-for="post in posts", :key="post.title" )
              td {{ post.title }}
              td {{ post.description }}

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
        const response = await PostsService.fetchPosts();
        this.posts = response.data;
        console.log(this.posts);
      }
    },
    mounted() {
      this.getPosts()
    }
  };
</script>
