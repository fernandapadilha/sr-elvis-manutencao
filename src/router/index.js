import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Manutencao from '@/views/Manutencao.vue'
import Equipamentos from '@/views/Equipamentos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/manutencao',
      name: 'manutencao',
      component: Manutencao,
    },
    {
      path: '/equipamentos',
      name: 'equipamentos',
      component: Equipamentos,
    }
  ]
})

export default router
