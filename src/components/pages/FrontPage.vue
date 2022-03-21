<template>
  <div>商品追加画面</div>
  <IndicateFile />
  <SelectFileButton />
  <SubmitButton />
</template>

<script>
import IndicateFile from "../parts/IndicateFile.vue";
import SelectFileButton from "../parts/SelectFileButton.vue";
import SubmitButton from "../parts/SubmitButton.vue";

export default {
  components: {
    IndicateFile,
    SelectFileButton,
    SubmitButton,
  },
};
</script>

<style></style>
