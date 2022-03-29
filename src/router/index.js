import { createRouter, createWebHistory } from 'vue-router'
import apartment from '../views/Apartment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'apartment',
      component: apartment
    },
    {
      path: '/reservas',
      name: 'booking',
      component: () => import('../views/booking.vue')
    },
    {
      path: '/admin/',
      name: 'login',
      component: () => import('../views/admin/login.vue')
    },
    {
      path: '/admin/registro',
      name: 'register',
      component: () => import('../views/admin/register.vue')
    },
    {
      path: '/admin/servicios',
      name: 'services',
      component: () => import('../views/admin/services.vue')
    },
    {
      path: '/admin/precios',
      name: 'prices',
      component: () => import('../views/admin/prices.vue')
    },
    {
      path: '/admin/reservas',
      name: 'bookings',
      component: () => import('../views/admin/bookings.vue')
    }
  ]
})

export default router
