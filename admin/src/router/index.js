import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryCreate from '../views/CategoryCreate.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemCreate from '../views/ItemCreate.vue'
import ItemList from '../views/ItemList.vue'
import HeroCreate from '../views/HeroCreate.vue'
import HeroList from '../views/HeroList.vue'

Vue.use(VueRouter)

const routes = [
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
      {path: '/heroes/list', component: HeroList}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
