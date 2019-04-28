//client routes here

import Hello from '@/components/HelloWord'
import Posts from '@/components/pages/PostsPage'
import NewPost from '@/components/pages/NewPostPage'
import EditPost from '@/components/pages/EditPostPage'
import Detail from '@/components/pages/PostDetail'


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
  },
  {
    path: '/posts/:id',
    name: 'EditPost',
    component: EditPost
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/',
    redirect: '/posts'
  }

]

export default routes
