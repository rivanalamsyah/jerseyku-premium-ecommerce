import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    meta: { title: 'Jerseyku - Jasa Pembuatan Jersey Custom Premium #1' }
  },
  {
    path: '/katalog',
    component: () => import('@/views/Catalog.vue'),
    meta: { title: 'Katalog Jersey Custom Terbaru - Jerseyku' }
  },
  {
    path: '/produk/:id',
    component: () => import('@/views/ProductDetail.vue'),
    meta: { title: 'Detail Produk - Jerseyku' }
  },
  {
    path: '/tentang',
    component: () => import('@/views/About.vue'),
    meta: { title: 'Tentang Kami - Jerseyku' }
  },
  {
    path: '/cara-pesan',
    component: () => import('@/views/HowToOrder.vue'),
    meta: { title: 'Cara Pemesanan Jersey Custom - Jerseyku' }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    return { top: 0, behavior: 'smooth' }
  }
})

// Simple Route Guard for Page Titles
router.beforeEach((to) => {
  document.title = (to.meta.title as string) || 'Jerseyku'
})

export default router
