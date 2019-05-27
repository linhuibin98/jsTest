import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: false
  },
  mutations: {
    changeShowT() {
      this.state.isShow = true;
    },
    changeShowF() {
      this.state.isShow = false;
    }
  },
  actions: {

  }
})
