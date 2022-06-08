<template>
  <div>
    <div class="overlay">
      <template v-for="(camera, index) in cameras">
        <camera-marker
          :number="camera.number"
          :key="index"
          :style="{ top: camera.location.top, left: camera.location.left }"
          class="marker"
        />
      </template>
      <Picture class="picture" />
    </div>
    <img src="@/assets/map.png" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CameraMarker from "./CameraMarker";
import Picture from "./Picture";
export default {
  components: { Picture, CameraMarker },
  computed: {
    ...mapState(["cameras"]),
  },
};
</script>

<style lang="scss" scoped>
.marker {
  position: absolute;
}
.overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: rgb(0, 0, 0, 0);
}
.picture {
  position: absolute;
  bottom: 0;
}
</style>
