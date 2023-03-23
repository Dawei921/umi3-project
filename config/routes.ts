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
  {
    path: '/img',
    name: '图片管理',
    routes: [
      {
        path: '/img/upload',
        name: '上传图片',
        component: '@/pages/img/upload',
      },
    ],
  },
];
