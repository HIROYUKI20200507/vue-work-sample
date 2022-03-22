<template>
  <div class="image-wrapper" @mouseover="hoverAction">
    <div class="img-main">
      <img :src="installItemImage.src" :alt="installItemImage.name" />
      <span v-if="hoverAction" class="dot-effect"></span>
      <input
        type="hidden"
        :name="installItemImage.name"
        :value="installItemImage.id"
      />
    </div>
    <div class="item-title">{{ installItemImage.name }}</div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: { getId: Number, getImage: String, getName: String },
  setup(props) {
    const hoverAction = ref(true);
    const installItemImage = reactive({
      id: props.getId,
      src: props.getImage,
      name: props.getName,
    });

    return { hoverAction, installItemImage };
  },
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  .img-main {
    position: relative;
    .dot-effect {
      position: absolute;
      top: 48%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      max-width: 350px;
      max-height: 200px;
      background-color: black;
      opacity: 0.4;
    }
  }
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
