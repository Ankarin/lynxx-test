<template>
  <div @click="setSelectedCamera(number)" class="cameraMarker">
    <hr
      align="center"
      style="position: absolute"
      width="200"
      size="2"
      color="#ff0000"
    />
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
