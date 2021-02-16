<template>
  <div id="app">
    <vue-form />
  </div>
</template>

<script>
import VueForm from "./components/vue-form/vue-form.vue";

export default {
  name: "App",
  components: { VueForm },
  data() {
    return {
      inputs: [
        {
          id: 0,
          label: "Имя",
          type: "text",
          placeholder: "Введите Ваше имя"
        },
        {
          id: 1,
          label: "Email",
          type: "email",
          placeholder: "Введите Ваш email"
        },
        {
          id: 2,
          label: "Номер телефона",
          type: "tel",
          placeholder: "Введите номер телефона"
        }
      ]
    };
  }
};
</script>

<style lang="less">
@import url("./style/Base/App/BaseApp.less");
</style>
