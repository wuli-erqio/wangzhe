import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

import CategoryCreate from '../views/category/CategoryCreate.vue'
import CategoryList from '../views/category/CategoryList.vue'

import ItemCreate from '../views/item/ItemCreate.vue'
import ItemList from '../views/item/ItemList.vue'

import HeroCreate from '../views/hero/HeroCreate.vue'
import HeroList from '../views/hero/HeroList.vue'

import ArticleCreate from '../views/article/ArticleCreate.vue'
import ArticleList from '../views/article/ArticleList.vue'

import AdCreate from '../views/ad/AdCreate.vue'
import AdList from '../views/ad/AdList.vue'

import AdminUserCreate from '../views/admin_user/AdminUserCreate.vue'
import AdminUserList from '../views/admin_user/AdminUserList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {isPublic: true}
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {path: '/categories/create', component: CategoryCreate },
      {path: '/categories/edit/:id', component: CategoryCreate, props:true },
      {path: '/categories/list', component: CategoryList},

      {path: '/items/create', component: ItemCreate },
      {path: '/items/edit/:id', component: ItemCreate, props:true },
      {path: '/items/list', component: ItemList},

      {path: '/heroes/create', component: HeroCreate },
      {path: '/heroes/edit/:id', component: HeroCreate, props:true },
      {path: '/heroes/list', component: HeroList},

      {path: '/articles/create', component: ArticleCreate },
      {path: '/articles/edit/:id', component: ArticleCreate, props:true },
      {path: '/articles/list', component: ArticleList},

      {path: '/ads/create', component: AdCreate },
      {path: '/ads/edit/:id', component: AdCreate, props:true },
      {path: '/ads/list', component: AdList},

      {path: '/admin_users/create', component: AdminUserCreate },
      {path: '/admin_users/edit/:id', component: AdminUserCreate, props:true },
      {path: '/admin_users/list', component: AdminUserList}
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.isPublic && localStorage.token) {
    return next('/login')
  }
  next()
})

export default router
