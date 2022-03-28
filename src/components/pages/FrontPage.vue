<template>
  <div class="header">
    <div class="head-title">写真追加画面</div>
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

<script lang="ts">
import SelectFileButton from "../parts/SelectFileButton.vue";
import SubmitButton from "../parts/SubmitButton.vue";
import Draggable from "vuedraggable";
import { defineComponent, reactive, ref, watch } from "vue";

interface GetImageData {
  id: number;
  name: string;
  url: string;
  date: string;
}

export default defineComponent({
  components: {
    SelectFileButton,
    SubmitButton,
    Draggable,
  },
  setup() {
    const dragging = ref<boolean>(false);
    const buttonDisable = ref<boolean>(true);
    const getReactiveImageData = reactive<GetImageData[]>([]);

    const getImageData = (imgData: GetImageData[]) => {
      imgData.forEach((element: any, index: number) => {
        const today = new Date();

        getReactiveImageData.push({
          id: index + 1,
          name: element.name,
          url: URL.createObjectURL(element),
          date: `${today.getFullYear()}${today.getMonth()}${today.getDate()}${today.getHours()}${today.getMinutes()}`,
        });
      });
    };

    const removeItem = (removeValue: GetImageData) => {
      if (confirm("削除してよろしいですか？")) {
        const getIndex = getReactiveImageData.findIndex(
          (data) => data.id === removeValue.id
        );

        getReactiveImageData.splice(getIndex, 1);
      }
    };

    watch(getReactiveImageData, (data) => {
      data.forEach((_, index) => {
        getReactiveImageData[index].id = index + 1;
      });

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
});
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

  @media screen and (max-width: 599px) {
    grid-template-columns: 1fr 1fr;
  }

  .img-main {
    position: relative;
  }
  .item-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
    max-height: 200px;
    object-fit: cover;
    cursor: grab;

    @media screen and (max-width: 599px) {
      max-height: 100px;
    }

    &:active {
      cursor: grabbing;
    }
  }
}

.footer {
  margin: 100px 0;
}
</style>
