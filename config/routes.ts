export default [
  {
    path: '/login',
    component: '@/pages/login',
    name: '登录',
    layout: false,
    hideInMenu: true,
  },
  { path: '/', component: '@/pages/index', name: '主页' },
  { path: '/user', component: '@/pages/user', name: '用户管理' },
  {
    path: '/mgt',
    name: '测试管理',
    routes: [
      { path: '/mgt/one', name: '测试管理1', component: '@/pages/mgt/one' },
    ],
  },
];
