<template>
  <div>
    <img
      v-if="displayDirection || selectedCamera == number"
      class="directionImg"
      :style="{ top: direction.top, left: direction.left }"
      height="100px"
      :src="require(`@/assets/direction${number}.png`)"
    />
    <div
      @mouseover="displayDirection = true"
      @mouseleave="displayDirection = false"
      @click="setSelectedCamera(number)"
      class="cameraMarker"
    >
      <p>{{ number }}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: ["number", "direction"],
  name: "CameraMarker",
  data() {
    return {
      displayDirection: false,
    };
  },
  methods: {
    ...mapMutations(["setSelectedCamera"]),
  },
  computed: {
    ...mapState(["selectedCamera"]),
  },
};
</script>

<style lang="scss" scoped>
.directionImg {
  position: absolute;
}
.cameraMarker {
  z-index: 2;
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: black;
  color: white;
  display: flex;

  p {
    font-size: 12px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>
