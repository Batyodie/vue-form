<template>
  <button
    :disabled="disabled"
    type="submit"
    :class="{
      'vue-button_disable': disabled
    }"
    class="vue-input__input-l-basis vue-button  "
  >
    <span class="vue-button__text">
      <slot name="button-text">
        Button
      </slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "vue-button",
  props: {
    disabled: {
      type: Boolean,
      required: true
    }
  }
};
</script>
