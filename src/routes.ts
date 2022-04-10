export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: '@/pages/home' },
      { path: '/healthy', component: '@/pages/healthy' },
      { path: '/notify', component: '@/pages/notify' },
      { path: '/user', component: '@/pages/user' },
    ],
  },
];
