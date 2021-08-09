<template>
  <header class="wrapper">
    <router-link to="/" class="logo">exnaton</router-link>
    <!-- <span class="logo">exnaton</span> -->
    <div class="nav-box">
      <select ref="locales" v-model="chosenLocale">
        <option
          ref="locale"
          v-for="localeLocalValue in locales"
          :key="localeLocalValue"
          :value="localeLocalValue"
          >
          {{ localeLocalValue  }}
        </option>
      </select>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      locales: ["en", "de"],
      chosenLocale: null,
    };
  },

  computed: {
    ...mapGetters(["locale"]),
  },

  watch: {
    chosenLocale() {
      console.log(this.chosenLocale, 'change')
      this.setLocale(this.chosenLocale);
    },
  },

  methods: {
    ...mapActions(["setLocale"]),
  },
  
  mounted() {
    this.chosenLocale = this.locale
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  color: #fcfcfc;
  padding: 1rem 3rem;
}
.logo {
  width: max-content;
  display: grid;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  color: #fcfcfc;
}
.nav-box {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 8rem;
  align-items: center;
}
nav {
  column-gap: 2.5rem;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
}
nav span {
  width: max-content;
  font-size: 1rem;
}
.language {
  display: grid;
  align-items: center;
}
option {
  line-height: 1.3;
  border-radius: 100%;
  border: 1px solid #1d2024;
  margin: 3px 0;
}
option:not(.activeLang):hover {
  border: 1px solid #fcfcfc;
  cursor: pointer;
}
.activeLang {
  background-color: #fcfcfc;
  color: black;
  border-radius: 100%;
}
</style>