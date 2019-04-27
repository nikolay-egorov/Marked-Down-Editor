<template lang="pug">
<!--.b-navbar( type="dark" variant="dark")-->
<!--  .b-navbar-nav-->
<!--    .b-nav-item-->
<!--      .a(class="navbar-brand" href="/")-->
<!--          | MarkedDown-->
<!--    .b-nav-item(class="navbar-brand")-->
<!--      router-link( :to="{ name: 'PostsPage'}")-->
<!--        |Все посты-->

.navbar.navbar-inverse.navbar-fixed-top(type="dark")
  .container
    .navbar-header
      .a(class='navbar-brand' href='/')
        | MarkedDown
    .collapse.navbar-collapse
      .ul
        .nav.navbar-nav
          .li
            router-link( :to="{ name: 'Posts'}")
              |Все посты


</template>

<script>
  export default {
    name: 'HeaderBar',
    data() {
      return {
        title: 'MarkedDown Edit Blog'
      }
    }
  }
</script>
