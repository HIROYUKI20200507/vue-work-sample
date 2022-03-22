<template>
  <div class="image-wrapper">
    <img :src="installItemImage.src" :alt="installItemImage.name" />
    <input
      type="hidden"
      :name="installItemImage.name"
      :value="installItemImage.id"
    />
    <div class="item-title">{{ installItemImage.name }}</div>
  </div>
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

<style lang="scss" scoped>
.image-wrapper {
  .item-title {
    font-size: 0.8rem;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 350px;
    max-height: 200px;
    object-fit: cover;
  }
}
</style>
