<template>
  <div>商品追加画面</div>
  <template v-for="item in getReactiveImageData" :key="item.key">
    <IndicateFile :getId="item.key" :getImage="item.Url" :getName="item.name" />
  </template>
  <SelectFileButton @dispatchImage="getImageData" />
  <SubmitButton />
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
          id: key,
          name: element.name,
          Url: URL.createObjectURL(element),
        });
      }
    };

    return { getImageData, getReactiveImageData };
  },
};
</script>

<style></style>
