import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PdfWorkspace from '../views/PdfWorkspace.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pdf',
    name: 'PdfWorkspace',
    component: PdfWorkspace
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
