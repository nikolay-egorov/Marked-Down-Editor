<template lang="pug">
  .container
    .h1
        | Редактирование
    br
    br
    .row
      .col-md-6
        h3
          | Конструктор
        br
        section.edit
          form( @submit.prevent="editPost()" )
            .form-group
               label(for="title")
                | Название
               input.form-control( type="text", name="title", id="title", placeholder="Название", v-model.trim="post.title", v-on:input="getTitle" )
            .form-group
              label(for="description")
                | Содержание
              textarea.form-control(rows="10", type="text", name="description", id="description", placeholder="Содержание", v-model.trim="post.description", v-on:input="update" )
            .form-group
                  .label(for="publicationDate")
                    | Дата публикации
                  VueCtkDateTimePicker(v-model="post.postTime", id="postTime", formatted="ll", format="YYYY-MM-DD"  label="Выберите дату", only-date="true", locale="ru")
            .form-group
              button.btn.btn-primary( type="submit", name="editPost" )
                | Изменить


      .col-md-6
        h3
          | Превью
        br
        div(id="titlePrev")
        hr
        div(id="preview" class="markdown-body")


    div

      br
      router-link( :to="{ name: 'Posts' }" )
        | на главную

</template>

<script>
  import PostsService from '@/services/PostsService'
  import {toHTML} from '@/utils.js'

  export default {
    name: 'EditPostPage',
    data() {
      return {
        post: {
          title: '',
          description: '',
          postTime: 0
          // content:''
        }
      }
    },
    methods: {
      async getPost() {
        const response = await PostsService.getPost({id: this.$route.params.id})
        this.post.title = response.data.title
        this.post.description = response.data.description
        this.post.postTime = response.data.postTime
        console.log(response.data.postTime)
        console.log(this.post.postTime)
        // this.post.content = response.data.content
        this.update()
        this.getTitle()
      },
      async editPost() {
        if (this.post.title !== '' && this.post.description !== '') {
          await PostsService.updatePost({
            id: this.$route.params.id,
            title: this.post.title,
            description: this.post.description,
            postTime: this.post.postTime
          })
          this.$router.push({name: 'Posts'})
        }
      },
      update: function () {
        document.getElementById("preview").innerHTML = toHTML(
          this.post.description
        )
        document.getElementById("preview").style.textAlign = "left"
      },
      getTitle() {

        let title = { name: this.post.title}
        document.getElementById("titlePrev").innerHTML =`<h4>${title.name}</h4>`
      },

    },
    mounted() {
      this.getPost()
    }
  }
</script>
