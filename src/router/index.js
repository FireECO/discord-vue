import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import ServerView from '../pages/ServerView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/server/:id', name: 'server', component: ServerView, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router