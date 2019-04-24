<template lang="pug">
  .container
    .row
      .col-md-9
        h1
          | Добавить Новый Пост
        form
          .form-group
            input.form-control( type="text", name="title", id="title", placeholder="Название", v-model.trim="post.title" )
          .form-group
            textarea.form-control( type="text", rows="5", name="description", id="description", placeholder="Содержание", v-model.trim="post.description" )
          .form-group
            button.btn.btn-block.btn-primary( type="button", name="addPost", id="addPost", @click="addPost()" )
              | Добавить пост
          section
            button.btn.btn-success.btn-block( type="button", @click="goBack()" )
              | На главную
</template>


<script>
  import PostsService from '@/services/PostsService'
  export default {
    name: 'NewPostPage',
    data () {
      return {
        post: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      async addPost () {
        if (this.post.title !== '' && this.post.description !== '') {
          await PostsService.addNewPost({
            title: this.post.title,
            description: this.post.description
          })
          this.$router.push({ name: 'Posts' })
        } else {
          alert('Empty fields!')
        }
      },
      goBack () {
        this.$router.push({ name: 'Posts' })
      }
    }
  }
</script>
