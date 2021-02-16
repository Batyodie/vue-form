<template>
  <!-- component Component for keeping track of validated fields. Returns boolean if inputs are valid -->
  <ValidationObserver ref="form" class="vue-form__inner" v-slot="{ invalid }">
    <form @submit.prevent="onSubmit" @reset.prevent="reset" class="vue-form">
      <div class="vue-form__reg">
        <h1 class="vue-form__reg-title">
          Регистрация
        </h1>
        <div class="vue-form__reg-sign">
          <p class="vue-form__reg-sign-copy">Уже есть аккаунт?</p>
          <a href="#" class="vue-form__reg-sign-link">Войти</a>
        </div>
      </div>
      <!-- The component responsible for the validation work -->
      <!-- Validation rules -->
      <ValidationProvider
        :rules="{
          regexName: /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/,
          required: true
        }"
      >
        <div slot-scope="{ errors }" class="vue-input">
          <label for="input-name" class="vue-input__label">Имя</label>
          <input
            id="input-name"
            class="vue-input__input vue-input__input-l-basis vue-input__input-bg-basis"
            type="text"
            v-model="name"
            placeholder="Введите Ваше имя"
          />
          <p class="vue-input__error">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>
      <ValidationProvider
        :rules="{
          required: true,
          email: true
        }"
      >
        <div slot-scope="{ errors }" class="vue-input">
          <label for="input-email" class="vue-input__label">Email</label>
          <input
            id="input-email"
            class="vue-input__input vue-input__input-l-basis vue-input__input-bg-basis"
            type="email"
            v-model="email"
            placeholder="Введите Ваш email"
          />
          <p class="vue-input__error">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>
      <ValidationProvider
        :rules="{
          required: true,
          regex: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/
        }"
      >
        <div slot-scope="{ errors }" class="vue-input">
          <label for="input-tel" class="vue-input__label">Номер телефона</label>
          <input
            id="input-tel"
            class="vue-input__input vue-input__input-l-basis vue-input__input-bg-basis"
            type="tel"
            v-model="number"
            placeholder="Введите номер телефона"
          />
          <p class="vue-input__error">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>
      <vue-dropdown :reset="submited" @Dropdown-select="GetSelect" />
      <div class="vue-input-check">
        <label
          for="input-checkbox"
          class="vue-input__label vue-input-check__label"
          >Принимаю
          <a href="#" class="vue-input-rules-link">условия</a>
          использования</label
        >
        <input
          id="input-checkbox"
          class="vue-input-check__checkbox vue-input__input-bg-basis"
          type="checkbox"
          v-model="checkbox"
        />
      </div>
      <vue-button :disabled="invalid">
        <template slot="button-text">Зарегистрироваться</template>
      </vue-button>
    </form>
  </ValidationObserver>
</template>

<script>
import VueButton from "../vue-button/vue-button.vue";
import VueDropdown from "../vue-dropdown/vue-dropdown.vue";

import { extend } from "vee-validate";
import { required, email, regex } from "vee-validate/dist/rules";

// Add the required rule
extend("required", {
  ...required,
  message: "Это обязательное поле"
});

// Add the regex rule for tel input
extend("regex", {
  ...regex,
  message: "Введено не корректное значение номера телефона"
});
// Add the regex rule for text input
extend("regexName", {
  ...regex,
  message: "Введено не корректное значение имени"
});

// Add the email rule
extend("email", {
  ...email,
  message: "Введено не корректное значение  email"
});

export default {
  components: { VueDropdown, VueButton },
  name: "vue-form",
  data() {
    return {
      email: "",
      name: "",
      number: "",
      checkbox: "",
      language: null,
      result: null,
      submited: false
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }
        this.result = {
          email: this.email,
          name: this.name,
          number: this.number,
          language: this.language
        };
        alert(
          `Вы успешно зарегистрировались! Ваше имя: ${this.name}, номер телефона: ${this.number}, почта: ${this.email}, язык: ${this.language.title}`
        );
        // result
        console.log(this.result);
        this.submited = true;
        // reset inputs
        this.email = this.name = this.number = this.checkbox = "";

        // Wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
    GetSelect(currentSelect) {
      this.language = currentSelect;
    }
  }
};
</script>
