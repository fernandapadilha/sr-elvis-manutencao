import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Manutencao from '@/views/Manutencao.vue'
import Equipamentos from '@/views/Equipamentos.vue'
import Orcamentos from '@/views/Orcamentos.vue'
import Entrar from '@/views/Entrar.vue'

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
    },
    {
      path: '/orcamentos',
      name: 'orcamentos',
      component: Orcamentos,
    },
    {
      path: '/entrar',
      name: '/entrar',
      component: Entrar,
    }
  ]
})

export default router
