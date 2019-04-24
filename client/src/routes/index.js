//client routes here

import Hello from '@/components/HelloWord'
import Posts from '@/components/pages/PostsPage'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  }
]

export default routes
