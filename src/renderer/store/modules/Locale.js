import axios from "axios"
import i18n from "@/plugins/i18n.js"

  const state= {
    locale: null
  };
  // getters: {
  //   locale(state) {
  //     return state.locale
  //   }
  // },
 const mutations= {
    setLocale(state, value) {
      state.locale = value
    }
  };
  const actions= {
    setLocale({ commit }, locale) {
      commit('setLocale', locale)
      
      // axios.get(`/langs/${locale}.json`).then((res) => {
      //   i18n.setLocaleMessage(locale, res.data);
      //   i18n.locale = locale;
      // });
        // const translate = require(`../../assets/langs/${locale}.json`)

        // console.log(translate);
      // axios.get(`${document.location.origin}/langs/${locale}.json`).then((res) => {
      //   i18n.setLocaleMessage(locale, res.data);
      //   i18n.locale = locale;
      // });
    }
  };
  export default{
    state,
    mutations,
    actions
  }
