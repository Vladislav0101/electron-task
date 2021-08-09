import i18n from "../../plugins/i18n";

export default {
  state: {
    locale: "en",
  },

  getters: {
    locale(state) {
      return state.locale;
    },
  },

  mutations: {
    setLocale(state, value) {
      state.locale = value;
    },
  },

  actions: {
    setLocale({ commit }, locale) {
      commit("setLocale", locale);

      i18n.setLocaleMessage(
        locale,
        require(`../../assets/langs/${locale}.json`)
      );
      i18n.locale = locale;
    },
  },
};
