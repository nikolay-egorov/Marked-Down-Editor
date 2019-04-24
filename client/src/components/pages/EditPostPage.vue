<template lang="pug">
  .container
    .row
      .col-md-9
        section.edit
          h1
            | Редактирование
          form( @submit.prevent="editPost()" )
            .form-group
               input.form-control( type="text", name="title", id="title", placeholder="Название", v-model.trim="post.title" )
            .form-group
                  textarea.form-control( type="text", name="description", id="description", placeholder="Содержание", v-model.trim="post.description" )
            .form-group
              button.btn.btn-block.btn-primary( type="submit", name="editPost" )
                | Изменить
          div
            router-link( :to="{ name: 'Posts' }" )
              | на главную
</template>

<script>
  import PostsService from '@/services/PostsService'

  export default {
    name: 'EditPostPage',
    data() {
      return {
        post: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      async getPost() {
        const response = await PostsService.getPost({id: this.$route.params.id})
        this.post.title = response.data.title
        this.post.description = response.data.description
      },
      async editPost() {
        if (this.post.title !== '' && this.post.description !== '') {
          await PostsService.updatePost({
            id: this.$route.params.id,
            title: this.post.title,
            description: this.post.description
          })
          this.$router.push({name: 'Posts'})
        }
      }
    },
    mounted() {
      this.getPost()
    }
  }
</script>
