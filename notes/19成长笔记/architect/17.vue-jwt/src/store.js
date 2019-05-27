import Vue from 'vue';
import Vuex from 'vuex';
import { login } from '@/api/user';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: false,
    username: 'linhuibin'
  },
  mutations: {
    changeShowT(state) {
      state.isShow = true;
    },
    changeShowF(state) {
      state.isShow = false;
    },
    setUser(state, username) {
      state.username  = username;
    }
  },
  actions: {
    async toLogin({ commit }, username) {
      let res = await login(username);
      if (res.code === 0) {  // 登入成功
        commit('setUser', res.username);
      } else {
        return Promise.reject(res.msg);
      }
    }
  }
})
