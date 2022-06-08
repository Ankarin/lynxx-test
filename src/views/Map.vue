<template>
  <div class="map">
    <div class="contentWrapper">
      <button @click="setSelectedCamera(0)">Reset Cameras</button>
      <map-scheme class="mapScheme" />
    </div>
  </div>
</template>

<script>
import MapScheme from "../components/MapScheme";
import { mapMutations } from "vuex";

export default {
  name: "Map",
  components: { MapScheme },
  methods: {
    ...mapMutations(["setSelectedCamera"]),
  },
};
</script>

<style lang="scss" scoped>
.map {
  height: 100vh;
  position: relative;
}
.mapScheme {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
