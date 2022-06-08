<template>
  <div @click="setSelectedCamera(number)" class="cameraMarker">
    <div class="direction"></div>
    <p>{{ number }}</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["number"],
  name: "CameraMarker",
  methods: {
    ...mapMutations(["setSelectedCamera"]),
  },
};
</script>

<style lang="scss" scoped>
.direction {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 80px solid lightblue;
  transform: rotate(-45deg);
}
.cameraMarker {
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
