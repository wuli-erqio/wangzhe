import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryCreate from '../views/CategoryCreate.vue'
import CategoryList from '../views/CategoryList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {path: '/categories/create', component: CategoryCreate },
      {path: '/categories/edit/:id', component: CategoryCreate, props:true },
      {path: '/categories/list', component: CategoryList}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
