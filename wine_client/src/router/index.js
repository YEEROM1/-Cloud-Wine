import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';
import history from '../views/history.vue';
import factory from '../views/factory.vue';
import wiki from '../views/wiki.vue';
import about from '../views/about.vue';
import wine_detail from '../views/wine.vue';
import people_detail from '../views/people.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: { level: 1 },
  },
  {
    path: '/wiki',
    name: 'wiki',
    component: wiki,
    meta: { level: 2 },
  },
  {
    path: '/factory',
    name: 'factory',
    component: factory,
    meta: { level: 3 },
  },
  {
    path: '/history',
    name: 'history',
    component: history,
    meta: { level: 4 },
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    meta: { level: 5 },
  },
  {
    path: '/wiki/wine_detail',
    name: 'wine_detail',
    component: wine_detail,
  },
  {
    path: '/factory/people_detail',
    name: 'people_detail',
    component: people_detail,
  }
]

const router = new VueRouter({
  routes
})

router.afterEach(() => {
  window.scrollTo(0, 0);
})

export default router
