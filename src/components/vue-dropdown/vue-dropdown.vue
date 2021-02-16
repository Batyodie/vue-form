<template>
  <div class="vue-dropdown">
    <label class="vue-dropdown__label vue-input__label">
      Язык
    </label>
    <div class="vue-dropdown__dropdown">
      <button
        type="button"
        @click="DropdownHandle()"
        class="vue-dropdown__dropdown-control vue-input__input-l-basis vue-input__input-bg-basis"
      >
        <span
          :class="{
            'vue-dropdown__dropdown-text_current': UpdateText().id !== null
          }"
          class="vue-dropdown__dropdown-text"
          >{{ UpdateText().title }}</span
        >
        <img
          :src="icon"
          alt="dropdown icon arrow"
          class="vue-dropdown__dropdown-icon"
        />
      </button>
      <template v-if="dropdownOpen">
        <ul class="vue-dropdown__dropdown-list vue-input__input-bg-basis">
          <li
            v-for="language in languages"
            :key="language.id"
            @click="DropdownSelected(language)"
            class="vue-dropdown__dropdown-item"
          >
            {{ language.title }}
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import arrow from "@/assets/Icon.svg";
export default {
  props: {
    reset: {
      type: Boolean,
      required: true
    }
  },
  name: "vue-dropdown",
  data() {
    return {
      icon: arrow,
      dropdownOpen: false,
      currentText: { id: null, title: "Язык" },
      languages: [
        { id: 0, title: "Русский" },
        { id: 1, title: "Английский" },
        { id: 2, title: "Китайский" },
        { id: 3, title: "Испанский" }
      ]
    };
  },
  computed: {
    UpdateText() {
      return () =>
        this.reset
          ? (this.currentText = { id: null, title: "Язык" })
          : this.currentText;
    }
  },

  methods: {
    DropdownHandle() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    DropdownSelected(lang) {
      this.currentText = lang;
      this.dropdownOpen = false;
      this.$emit("Dropdown-select", this.currentText);
    }
  }
};
</script>
