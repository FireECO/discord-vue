import { createRouter, createWebHistory } from 'vue-router'
import ServerView from '../views/ServerView.vue'
import MessageView from '../views/MessageView.vue'

const routes = [
  {
    path: '/servers',
    name: 'Servers',
    component: ServerView
  },
  {
    path: '/messages',
    name: 'Messages',
    component: MessageView
  },
  {
    path: '/',
    redirect: '/servers'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
