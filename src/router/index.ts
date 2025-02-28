import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FeaturesView from '@/views/FeaturesView.vue';
import ContactView from '@/views/ContactView.vue';
import DocsView from '@/views/DocsView.vue';

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
    {
      path: '/docs',
      name: 'Docs',
      component: DocsView,
    }
  ]
});

export default router;