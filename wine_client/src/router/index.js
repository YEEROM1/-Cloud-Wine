import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';
import history from '../views/history.vue';
import factory from '../views/factory.vue';
import wiki from '../views/wiki.vue';
import about from '../views/about.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {level: 1},
  },
  {
    path: '/wiki',
    name: 'wiki',
    component: wiki,
    meta: {level: 2},
  },
  {
    path: '/factory',
    name: 'factory',
    component: factory,
    meta: {level: 3},
  },
  {
    path: '/history',
    name: 'history',
    component: history,
    meta: {level: 4},
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    meta: {level: 5},
  }
]

const router = new VueRouter({
  routes
})

router.afterEach(() => {
  window.scrollTo(0, 0);
})

export default router
