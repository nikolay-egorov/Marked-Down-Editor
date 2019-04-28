<template lang="pug">
.container
   .row
      .col-md-9
        h1
          | Все Посты
        hr
        h3
          | Здесь будут показаны все посты


        section.panel.panel-success( v-if="posts.length" )

          table.table.table-striped
            tr
              th Дата
              th(align="center") Название
              th(width="200") Действие
            tr( v-for="(post, index) in posts", :key="post.title"  )
              td {{moment(post.postTime)}}
              td( v-on:click="readMore(post)") {{ post.title }}
              td(align="center")
               router-link( :to="{ name: 'EditPost', params: { id: post._id } }" )
                  | Изменить
               a( href='#', @click='removePost(post._id)' )
                  |  Удалить

        section.panel.panel-danger( v-if="posts.length<1" )
          p
            | Здесь ничего нет ... Исправим это!

      .col-md-3
        .p
           router-link( :to="{ name: 'NewPost' }" )
              | Добавить новый пост


</template>

<script>
  import PostsService from "@/services/PostsService"
  import  moment  from 'moment'
  // import HeaderBar from '@/components/public/Header'
  // import FooterBar from '@/components/public/Footer'


  export default {
    name: 'PostsPage',
    data() {
      return {
        posts: []
      }
    },
    // components: {
    //   HeaderBar,
    //   FooterBar
    // },
    methods: {
      async getPosts() {
        const response = await PostsService.fetchPosts()
        this.posts = response.data.posts
        console.log(this.posts)
      },
      async removePost (value) {
        if (confirm('Вы уверены, что хотите удалить пост?')) {
          await PostsService.deletePost(value)
          this.getPosts()
        } else {

        }
      },
      moment(date){
        return moment(date).locale("ru").format("DD MMM YYYY")
      },
      readMore(post){
        this.$router.push({ name: 'detail', params:  { id: post._id } })
      }
    },

    mounted() {
      this.getPosts()
    }
  }
</script>
