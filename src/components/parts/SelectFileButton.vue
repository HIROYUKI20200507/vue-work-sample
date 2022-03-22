<template>
  <input type="file" name="" id="" multiple @change="onImageUploaded" />
</template>

<script>
import { ref } from "vue";

export default {
  setup(_, { emit }) {
    const testImage = ref([]);

    const emitImageData = () => {
      emit("dispatchImage", testImage.value);
    };

    const onImageUploaded = (e) => {
      const images = e.target.files;

      if (images.length > 1) {
        for (let key = 0; key < images.length; key++) {
          testImage.value.push(images[key]);
        }
      } else {
        testImage.value.push(images[0]);
      }

      emitImageData();
    };

    return {
      testImage,
      onImageUploaded,
      emitImageData,
    };
  },
};
</script>

<style></style>
