import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/routes/'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes
})

/*
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
*/
