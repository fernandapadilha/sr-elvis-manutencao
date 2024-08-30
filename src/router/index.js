import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManutencaoServicos from '@/views/ManutencaoServicos.vue'
import Equipamentos from '@/views/EquiPamentos.vue'
import EntrarForm from '@/views/EntrarForm.vue'

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
      component: ManutencaoServicos,
    },
    {
      path: '/equipamentos',
      name: 'equipamentos',
      component: Equipamentos,
    },
    {
      path: '/entrar',
      name: '/entrar',
      component: EntrarForm,
    }
  ]
})

export default router
