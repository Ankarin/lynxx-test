<template>
  <div>
    <img height="150px" :src="require(`@/assets/img${selectedCamera}.jpeg`)" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Picture",
  computed: {
    ...mapState(["selectedCamera"]),
  },
};
</script>

<style scoped></style>
