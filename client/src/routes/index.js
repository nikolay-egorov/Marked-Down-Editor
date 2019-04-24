//client routes here

import Hello from '@/components/HelloWord'
import Posts from '@/components/pages/PostsPage'
import NewPost from '@/components/pages/NewPostPage'

const routes = [{
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/new',
    name: 'NewPost',
    component: NewPost
  }
]

export default routes
