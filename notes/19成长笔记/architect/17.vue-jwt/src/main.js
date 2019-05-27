import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.config.productionTip = false
Vue.use(iView);

let whiteList = [];  // 设置白名单
router.beforeEach( async (to, from, next) => {  // 切换组件时，判断是否登录(登录是否过期)
  let isLogin = await store.dispatch('validate');
  let needLogin = to.matched.some(item => item.meta.needLogin);
  if (needLogin) {
    if (isLogin) {
      next();
    } else {
      store.commit('setUser', '');  // 后期可以替换成退出登录
      next({          // 没有登录，则跳转到登录页
        path: '/login'
      })
    }
  } else {
    console.log(isLogin && to.path === '/login')
    if (isLogin && to.path === '/login') { // 如果已经登录, 就不能访问登录页
      next({
        path: '/'
      });
    } else {
      next();
    }
  }
})

//一个服务起了多个进程 3000  3001 => 数据库  集群
//把用户的信息存到客户端每次客户端带上token校验一下是否登录过
//session 存到服务端

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
