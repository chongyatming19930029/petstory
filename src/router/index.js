import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home/index.js';
import Shop from './Shop/index.js';
import BBS from './BBS/index.js';
import User from './User/index.js';

Vue.use(VueRouter);

  const routes = [
  Home,
  Shop,
  BBS,
  User,
  {
    path: '/*',
    redirect: { name: 'Home' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
