<template>
  <input type="file" name="" id="" @change="onImageUploaded" />
  <img :src="testImage[0]" alt="" />
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    const installImagesFiles = reactive({
      data: "",
    });
    const testImage = ref([]);

    const onImageUploaded = (e) => {
      const image = e.target.files[0];
      const imageUrl = URL.createObjectURL(image);
      testImage.value.push(imageUrl);
    };

    return {
      installImagesFiles,
      testImage,
      onImageUploaded,
    };
  },
};
</script>

<style></style>
