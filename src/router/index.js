import { createRouter, createWebHashHistory } from 'vue-router'
import PaginaPrincipal from '../feature/PaginaPrincipal/PaginaPrincipal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PaginaPrincipal
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../feature/Login/LoginProjeto.vue')
  },
  {
    path: '/conta-usuario',
    name: 'conta-usuario',
    component: () => import(/* webpackChunkName: "about" */ '../feature/Conta/ContaPrincipal.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
