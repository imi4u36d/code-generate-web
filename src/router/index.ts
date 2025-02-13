import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FeaturesView from '../views/FeaturesView.vue';
import ContactView from '../views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/features',
      name: 'Features',
      component: FeaturesView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
  ]
});

export default router;