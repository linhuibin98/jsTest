import Vue from 'vue';
import Vuex from 'vuex';
import { login, validate } from '@/api/user';
import { setLocal } from '@/libs/saveLocal';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: false,
    username: ''
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
        setLocal('token', res.token);
      } else {
        return Promise.reject(res.msg);
      }
    },
    async validate({ commit }) {
      let res = await validate();
      if (res.code === 0) {
        commit('setUser', res.username);
        setLocal('token', res.token);
      }
      return res.code === 0; // 是否登录
    }
  }
})
