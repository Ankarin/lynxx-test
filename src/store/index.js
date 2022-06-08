import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedCamera: 2,
    cameras: [
      { number: "1", location: { top: "50%", left: "30%" }, direction: {} },
      { number: "2", location: { top: "40%", left: "54%" } },
      { number: "3", location: { top: "67%", left: "50%" } },
      { number: "4", location: { top: "33%", left: "73%" } },
    ],
  },
  mutations: {
    setSelectedCamera(state, number) {
      state.selectedCamera = number;
    },
  },
  actions: {},
  modules: {},
});
