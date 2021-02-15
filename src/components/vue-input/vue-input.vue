<template>
  <div class="vue-input">
    <label class="vue-input__label">Имя</label>
    <input
      class="vue-input__input"
      type="text"
      placeholder="Введите Ваше имя"
    />
  </div>
</template>

<script>
export default {
  name: "vue-input",
};
</script>

<style lang="less">
@import url("./vue-input.less");
</style>
