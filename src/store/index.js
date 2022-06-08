import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedCamera: 0,
    cameras: [
      {
        number: "1",
        location: { top: "50%", left: "30%" },
        direction: { left: "-110%", top: "0" },
      },
      {
        number: "2",
        location: { top: "40%", left: "54%" },
        direction: { left: "-300%", top: "-260%" },
      },
      {
        number: "3",
        location: { top: "67%", left: "50%" },
        direction: { left: "-43%", top: "0" },
      },
      {
        number: "4",
        location: { top: "33%", left: "73%" },
        direction: { left: "-60%", top: "10%" },
      },
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
