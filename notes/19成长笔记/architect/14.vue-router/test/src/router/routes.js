import Home from '@/views/Home.vue';
import Email from '@/components/Email.vue';
import Version from '@/components/Version.vue';

// 组件利用 () => import(path) 方式加载，可以实现路由 懒加载
// 命名路由  <router-link name=''></router-link>
// 命名视图  <router-view name=''></router-view>
// 路由嵌套 children
// 路由元信息 meta 属性 , 可以用来限定某些页面 的 "访问权限" （比如是否需要登录）
/*
路由钩子： 
        全局守卫(钩子)： beforeEach, afterEach
        组件内守卫(钩子): beforeRouteEnter, beforeRouteUpdate (2.2 新增), beforeRouteLeave
*/

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    components: {
      default: Home,
      email: Email,
      version: Version
    }
  },
  {
    path: '/user',
    component: () => import('@/views/User.vue'),
    meta: {isLogin: true},
    children: [
      {
        path: '',
        redirect: 'info'
      },
      {
        path: 'info',
        component: () => import('@/components/Info.vue')
      },
      {
        path: 'add',
        component: () => import('@/components/Add.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/about',
    meta: {isLogin: true},
    component: () => import('@/views/About.vue')
  }
];

export default routes;