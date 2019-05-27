import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.config.productionTip = false
Vue.use(iView);

router.beforeEach( async (to, from, next) => {  // 切换组件时，判断是否登录(登录是否过期)
  let isLogin = await store.dispatch('validate');
  if (!isLogin) {
    store.commit('setUser', '');
  } 
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
