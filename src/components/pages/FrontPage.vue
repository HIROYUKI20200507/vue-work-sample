<template>
  <div class="header">
    <div class="head-title">商品追加画面</div>
  </div>
  <div class="main-display">
    <template v-for="item in getReactiveImageData" :key="item.key">
      <IndicateFile
        :getId="item.id"
        :getImage="item.Url"
        :getName="item.name"
      />
    </template>
  </div>
  <div class="footer">
    <SelectFileButton @dispatchImage="getImageData" />
    <SubmitButton />
  </div>
</template>

<script>
import IndicateFile from "../parts/IndicateFile.vue";
import SelectFileButton from "../parts/SelectFileButton.vue";
import SubmitButton from "../parts/SubmitButton.vue";
import { reactive } from "vue";

export default {
  components: {
    IndicateFile,
    SelectFileButton,
    SubmitButton,
  },
  setup() {
    let getReactiveImageData = reactive([]);

    const getImageData = (e) => {
      for (const key in e) {
        const element = e[key];

        getReactiveImageData.push({
          id: key + 1,
          name: element.name,
          Url: URL.createObjectURL(element),
        });
      }
    };

    return { getImageData, getReactiveImageData };
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
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.footer {
  margin: 100px 0;
}
</style>
