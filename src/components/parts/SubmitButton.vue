<template>
  <button class="submit-button" :disabled="disable" @click="sendImageData">
    画像を保存する
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import axios from "axios";

export default defineComponent({
  components: {},
  props: {
    disable: Boolean,
    getReactiveImageData: Array,
  },
  setup(props) {
    const store = useStore();

    const sendImageData = () => {
      axios
        .post("https://httpbin.org/post", props.getReactiveImageData)
        .then((res) => {
          console.log(res.data.json); //コンソールデバック用に設置
          store.commit("setCode", res.status);
        })
        .catch((error) => {
          store.commit("setCode", error.response.status);
        })
        .finally(() => {
          if (store.state.code !== (200 || null)) {
            alert(`${store.state.code}番エラーが発生しました`);
          }
        });
    };
    return { sendImageData };
  },
});
</script>

<style lang="scss" scoped>
.submit-button {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 50px auto;
  padding: 5px 20px;
  width: 200px;
  text-align: center;
  transition: 0.5s;
  box-shadow: 0px 0px 20px 0px;
  color: #65c4ff;
  background: #fff;
  border: 1px solid #65c4ff;
  border-radius: 50px;

  &:hover {
    color: #fff;
    background: #65c4ff;
    border: none;
  }

  &:disabled {
    background: #707070;
    color: #aaaaaa;
    border: none;
    box-shadow: none;
  }
}
</style>
