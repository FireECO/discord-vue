import { createRouter, createWebHistory } from 'vue-router'
import ServerView from '../views/ServerView.vue'
import DMsView from '../views/DMsView.vue'

const routes = [
  { path: '/servers', name: 'Servers', component: ServerView },
  { path: '/dm', name: 'DMs', component: DMsView },
  { path: '/', redirect: '/servers' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router