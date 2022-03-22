<template>
  <img :src="installItemImage.src" :alt="installItemImage.name" />
  <input
    type="hidden"
    :name="installItemImage.name"
    :value="installItemImage.id"
  />
</template>

<script>
import { reactive } from "vue";

export default {
  props: { getId: Number, getImage: String, getName: String },
  setup(props) {
    const installItemImage = reactive({
      id: props.getId,
      src: props.getImage,
      name: props.getName,
    });

    return { installItemImage };
  },
};
</script>

<style></style>
