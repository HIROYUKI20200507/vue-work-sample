<template>
  <div class="file">
    画像を選択
    <input type="file" multiple accept="image/*" @change="onImageUploaded" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(_, { emit }) {
    const testImage = ref<any[]>([]);

    const emitImageData = () => {
      emit("dispatchImage", testImage.value);
    };

    const onImageUploaded = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const images = target.files as FileList;

      if (images.length > 1) {
        for (let key = 0; key < images.length; key++) {
          testImage.value.push(images[key]);
        }
      } else {
        testImage.value.push(images[0]);
      }

      emitImageData();

      testImage.value = [];
    };

    return {
      testImage,
      onImageUploaded,
      emitImageData,
    };
  },
});
</script>

<style lang="scss" scoped>
.file {
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 5px 20px;
  width: 200px;
  border-radius: 50px;
  color: #fff;
  background: #65c4ff;
  text-align: center;
  transition: 0.5s;
  box-shadow: 0px 0px 20px 0px;

  &:hover {
    color: #65c4ff;
    background: #fff;
    border: 1px solid #65c4ff;
  }

  input[type="file"] {
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    font-size: 100px;
    cursor: pointer;
  }
}
</style>
