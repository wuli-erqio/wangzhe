import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Article from '../views/Article.vue'
import Hero from '../views/Hero.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {path: '/', name: 'home', component: Home},
      {path: '/articles/:id', name: 'Article', component: Article, props: true}
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {path: '/heroes/:id', name: 'Hero', component: Hero, props: true}
]

const router = new VueRouter({
  routes
})

export default router
