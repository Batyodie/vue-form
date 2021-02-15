<template>
  <div id="app">
    <vue-form></vue-form>
  </div>
</template>

<script>
import VueForm from "./components/vue-form/vue-form.vue";

export default {
  name: "App",
  components: { VueForm },
};
</script>

<style lang="less">
@import url("./style/Base/App/BaseApp.less");
</style>
