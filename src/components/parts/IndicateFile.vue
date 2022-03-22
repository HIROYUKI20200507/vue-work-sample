<template>
  <div
    class="image-wrapper"
    @mouseover="hoverAction = true"
    @mouseleave="hoverAction = false"
  >
    <div class="img-main">
      <img :src="installItemImage.src" :alt="installItemImage.name" />
      <div v-if="hoverAction" class="dot-effect">
        <a @click="pushPrev" class="arrow-prev"></a>
        <a @click="pushNext" class="arrow-next"></a>
      </div>
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
  setup(props, { emit }) {
    const hoverAction = ref(false);
    const installItemImage = reactive({
      id: props.getId,
      src: props.getImage,
      name: props.getName,
    });

    const pushPrev = () => {
      emit("pushPrev", installItemImage);
    };

    const pushNext = () => {
      emit("pushNext", installItemImage);
    };

    return { hoverAction, installItemImage, pushPrev, pushNext };
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
      max-width: 350px;
      height: -webkit-fill-available;
      background-color: black;
      opacity: 0.4;
      transition: 0.5s;

      %arrow {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        border-top: 3px solid #ffffff;
        border-right: 3px solid #ffffff;
        transform: rotate(45deg);
        cursor: pointer;
        opacity: 1;
        transition: 0.5s;
      }

      .arrow-prev {
        @extend %arrow;
        left: 85%;
      }

      .arrow-next {
        @extend %arrow;
        transform: rotate(225deg);
        left: 8%;
      }
    }
  }
  .item-title {
    font-size: 0.8rem;
  }

  img {
    width: 100%;
    max-width: 350px;
    object-fit: cover;
  }
}
</style>
