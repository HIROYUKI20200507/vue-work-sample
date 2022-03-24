<template>
  <div class="header">
    <div class="head-title">商品追加画面</div>
  </div>
  <form action="post">
    <Draggable
      :list="getReactiveImageData"
      item-key="id"
      @start="dragging = true"
      @end="dragging = false"
      class="main-display"
    >
      <template #item="{ element }">
        <div class="img-main">
          <img class="image-view" :src="element.url" :alt="element.name" />
          <div class="item-title">
            <div class="title">{{ element.name }}</div>
            <a class="remove-link" @click="removeItem(element)">
              <img
                src="../../../src/assets/images/dustBox.svg"
                alt="removeIcon"
              />
            </a>
          </div>
        </div>
      </template>
    </Draggable>
  </form>
  <div class="footer">
    <SelectFileButton @dispatchImage="getImageData" />
    <SubmitButton
      :disable="buttonDisable"
      :getReactiveImageData="getReactiveImageData"
    />
  </div>
</template>

<script>
import SelectFileButton from "../parts/SelectFileButton.vue";
import SubmitButton from "../parts/SubmitButton.vue";
import Draggable from "vuedraggable";
import { reactive, ref, watch } from "vue";

export default {
  components: {
    SelectFileButton,
    SubmitButton,
    Draggable,
  },
  setup() {
    const dragging = ref(false);
    const buttonDisable = ref(true);
    const getReactiveImageData = reactive([]);

    const getImageData = (e) => {
      for (const key in e) {
        const element = e[key];

        getReactiveImageData.push({
          id: Number(key) + 1,
          name: element.name,
          url: URL.createObjectURL(element),
        });
      }
    };

    const removeItem = (removeValue) => {
      if (confirm("削除してよろしいですか？")) {
        const getIndex = getReactiveImageData.findIndex(
          (data) => data.id === removeValue.id
        );

        getReactiveImageData.splice(getIndex, 1);
      }
    };

    watch(getReactiveImageData, () => {
      if (getReactiveImageData.length > 0) {
        buttonDisable.value = false;
      } else {
        buttonDisable.value = true;
      }
    });

    return {
      getImageData,
      removeItem,
      getReactiveImageData,
      dragging,
      buttonDisable,
    };
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
    display: flex;
    .title {
      font-size: 0.8rem;
    }

    .remove-link {
      cursor: pointer;

      & > img {
        display: block;
        margin: 10px;
        width: 20px;
        height: 20px;
      }
    }
  }
  .image-view {
    width: 100%;
    max-width: 350px;
    object-fit: cover;
  }
}

.footer {
  margin: 100px 0;
}
</style>
