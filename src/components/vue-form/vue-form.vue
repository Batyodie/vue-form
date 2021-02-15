<template>
  <form class="vue-form">
    <div class="vue-form__reg">
      <h1 class="vue-form__reg-title">
        Регистрация
      </h1>
      <div class="vue-form__reg-sign">
        <p class="vue-form__reg-sign-copy">Уже есть аккаунт?</p>
        <a href="#" class="vue-form__reg-sign-link">Войти</a>
      </div>
    </div>
    <vue-input></vue-input>
  </form>
</template>

<script>
import vueInput from "../vue-input/vue-input.vue";
export default {
  components: { vueInput },
  name: "vue-form",
};
</script>

<style lang="less">
@import url("./vue-form.less");
</style>
