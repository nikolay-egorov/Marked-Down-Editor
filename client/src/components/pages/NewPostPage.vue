<template lang="pug">
  .container
    h1
      | Новый Пост
    hr
    .row
      .col-md-6
        h3
          | Конструктор
        br
        form
          .form-group
            label(for="title")
              | Название
            input.form-control( type="text", name="title", id="title", placeholder="Встречают по одежке", v-model.trim="post.title" required autofocus , v-on:input="getTitle")
          .form-group
            label(for="description")
              | Содержание
            textarea.form-control( type="text", rows="10", name="description", id="description", placeholder="Содержание",required v-model.trim="post.description",
             v-on:input="update")

          .form-group
            label(for="postTime")
              | Дата Публикации
            VueCtkDateTimePicker(v-model="post.postTime", id="postTime", format="YYYY-MM-DD" , formatted="ll", label="Выберите дату", only-date="true", locale="ru")


      .col-md-6
        h3
          | Превью
        hr
        br
        div(id="titlePrev")
        div(id="preview" sd-model-to-html="text" class="markdown-body")

    .div
      button.btn.btn-primary( type="button", name="addPost", id="addPost", @click="addPost()" )
        | Добавить пост
      br
      br
      button.btn.btn-success(align="center", type="button", @click="goBack()" )
        | На главную
</template>


<script>
  import PostsService from '@/services/PostsService'
  import { toHTML } from '@/utils.js'



  export default {
    name: 'NewPostPage',
    data () {
      return {
        post: {
          title: '',
          description: '',
          postTime: ''
        }
      }
    },
    methods: {
      async addPost () {
        if (this.post.title !== '' && this.post.description !== '') {
          await PostsService.addNewPost({
            title: this.post.title,
            description: this.post.description,
            postTime: this.post.postTime
          })
          console.log(postTime)
          this.$router.push({ name: 'Posts' })
        } else {
          alert('Пустые поля!')
        }
      },
      update: function () {
        document.getElementById("preview").innerHTML = toHTML(
          this.post.description
        )
        document.getElementById("preview").style.textAlign="left"
      },
      goBack () {
        this.$router.push({ name: 'Posts' })
      },
      getTitle() {
        let title = { name: this.post.title}
        document.getElementById("titlePrev").innerHTML =`<h4>${title.name}</h4>`
      },
    }
  }
</script>
