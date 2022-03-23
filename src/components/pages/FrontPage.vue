<template>
  <div class="header">
    <div class="head-title">商品追加画面</div>
  </div>
  <Draggable
    :list="getReactiveImageData"
    item-key="id"
    @start="dragging = true"
    @end="dragging = false"
    class="main-display"
  >
    <template #item="{ element }">
      <div class="img-main">
        <img :src="element.url" :alt="element.name" />
        <input type="hidden" :name="element.name" :value="element.id" />
        <div class="item-title">{{ element.name }}</div>
      </div>
    </template>
  </Draggable>
  <div class="footer">
    <SelectFileButton @dispatchImage="getImageData" />
    <SubmitButton />
  </div>
</template>

<script>
import SelectFileButton from "../parts/SelectFileButton.vue";
import SubmitButton from "../parts/SubmitButton.vue";
import { reactive, ref } from "vue";
import Draggable from "vuedraggable";

export default {
  components: {
    SelectFileButton,
    SubmitButton,
    Draggable,
  },
  setup() {
    const dragging = ref(false);
    const getReactiveImageData = reactive([]);

    const getImageData = (e) => {
      for (const key in e) {
        const element = e[key];

        getReactiveImageData.push({
          id: Number(key) + 1,
          name: element.name,
          url: URL.createObjectURL(element),
          // TODO:keyで年月日+時間
        });
      }
    };

    return { getImageData, getReactiveImageData, dragging };
  },
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  font-weight: bold;
  margin: 100px 0 50px;

  .head-title {
    font-size: 1.5rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      max-width: 80px;
      padding-top: 10px;
      border-bottom: 2px solid #808080;
    }
  }
}

.main-display {
  display: grid;
  align-items: flex-start;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  .img-main {
    position: relative;
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

.footer {
  margin: 100px 0;
}
</style>
