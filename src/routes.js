import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Portfolio from './pages/Portfolio.vue'
import Personal from './pages/Personal.vue'
import Contact from './pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/personal', component: Personal },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
