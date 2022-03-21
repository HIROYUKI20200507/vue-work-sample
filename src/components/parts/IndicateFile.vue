<template>
  <div>
    <img src="" alt="" />
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const installItemImage = reactive({
      id: "",
      src: "",
      name: "",
    });

    return { installItemImage };
  },
};
</script>

<style></style>
