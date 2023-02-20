import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import AddPost from '../views/AddPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts/:id',
      name: 'Details',
      component: Details,
      props: true
    },
    {
      path: '/addpost',
      name: 'AddPost',
      component: AddPost,

    },
    {
      path: '/posts/:id',
      redirect: '/posts/:id'
    },
    {
      path: '/:catchAll(.*)',
      name: 'home',
      component: Home
    }
  ]
})

export default router
