<template>
  <FrontPage />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FrontPage from "./components/pages/FrontPage.vue";

export default defineComponent({
  components: {
    FrontPage,
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap");

#app {
  font-family: "Noto Sans JP", sans-serif;
}
</style>
