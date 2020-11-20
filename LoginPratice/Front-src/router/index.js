import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'personal',
        name: 'personal-center',
        component: () => import(/* webpackChunkName: "person" */'@/views/PersonalCenter.vue')
      },
      {
        path: '',
        name: 'HelloWorld',
        component: () => import(/* webpackChunkName: "helloworld" */'@/views/HelloWorld.vue'),
        props: true
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */'@/views/Register.vue')
  }
]


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && to.name !== 'Register' && window.sessionStorage.getItem('is_login') !== 'true') next({ name: "Login" })
  else next()
})

export default router
