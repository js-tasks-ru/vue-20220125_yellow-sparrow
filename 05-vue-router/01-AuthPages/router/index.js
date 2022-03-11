import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory('/05-vue-router/01-AuthPages'),
  routes: [
    {
      path: '/',
      component: () => import('../views/PageIndex'),
      name: 'index',
    },
    {
      path: '/login',
      component: () => import('../views/PageLogin'),
      name: 'login',
      props: true,
      // redirect: (to) => ({ name: 'register', query: { q: to.params.from } }),
      // redirect: (to) => {
      //   if (to.params.from == '123') {
      //     return '/404';
      //   } else {
      //     return { name: 'register' };
      //   }
      // },
    },
    {
      path: '/register',
      component: () => import('../views/PageRegister'),
      name: 'register',
    },
  ],
});
