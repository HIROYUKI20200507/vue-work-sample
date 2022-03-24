import { createStore } from "vuex";

export default createStore({
  state: {
    code: null,
  },
  mutations: {
    setCode(state, code) {
      state.code = code;
    },
  },
  actions: {
    setCode({ commit }, code) {
      commit("setCode", code);
    },
  },
  getters: {},
});
