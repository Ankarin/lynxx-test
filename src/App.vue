<template>
  <div id="app">
    <Map />
  </div>
</template>

<script>
import Map from "./views/Map";
export default {
  name: "App",
  components: {
    Map,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
