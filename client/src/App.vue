<template>
  <div id="app">
    <Navbar></Navbar>
<!--    <img src="./assets/logo.png">-->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from './components/public/Navbar'
  import Footer from './components/public/Footer'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;

}

Footer {
  flex-shrink: 0;

  padding: 20px;
}
</style>
