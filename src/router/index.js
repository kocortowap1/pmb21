import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pendaftar from '../views/Pendaftar.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../components/Home/LoginPendaftar')
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    component: () => import(/* webpackChunkName: "resetPassword" */ '../components/Home/resetPassword')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/pendaftar/:id',
    // name: 'Pendaftar',
    component: Pendaftar,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "beranda" */ '../components/pendaftar/beranda.vue')
      },
      {
        path: 'formulir',
        component: () => import(/* webpackChunkName: "formulir" */ '../components/pendaftar/formulir.vue')
      },
      {
        path: 'kuisioner',
        component: () => import(/* webpackChunkName: "kuisioner" */ '../components/pendaftar/kuisioner.vue')
      },
      {
        path: 'pembayaran',
        component: () => import(/* webpackChunkName: "pembayaran" */ '../components/pendaftar/pembayaran.vue')
      },
      {
        path: 'berkas',
        component: () => import(/* webpackChunkName: "berkas" */ '../components/pendaftar/berkas.vue')
      },
      {
        path: 'seleksi',
        component: () => import(/* webpackChunkName: "seleksi" */ '../components/pendaftar/seleksi.vue')
      },
      {
        path : 'pendaftaran',
        component: () => import(/* webpackChunkName: "pendaftaran" */ '../components/pendaftar/pendaftaran.vue')
      }
    ]
  },

  {
    path : "*",
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
