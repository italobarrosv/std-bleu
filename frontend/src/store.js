import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: 1 /*0 - pt, - 1 -en */
  },
  mutations: {
    SET_LANG (state, lang) {
      state.lang = lang
    }
  },
  actions: {
    SET_LANG({commit}, lang) {
      commit('SET_LANG', lang)
    }
    /* $store.dispatch('SET_LANG', 0 or 1) */
  }
})
