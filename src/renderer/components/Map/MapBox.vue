<template>
 <div>
  <div class="switch">
   <p @click="$emit('setLocale', 'en')" v-if="$i18n.locale !== 'en'">en</p>
   <p @click="$emit('setLocale', 'de')" v-if="$i18n.locale !== 'de'">de</p>
   <p @click="$emit('setLocale', 'ru')" v-if="$i18n.locale !== 'ru'">ru</p>
  </div>

  <transition-group tag="div" name="map" class="map-box">
   <div v-if="chosenCountry" :key="1">
    <h2>{{ $t("map.offerToJoin") }}</h2>
    <p>{{ $t("map.votingText") }}</p>
    <form action="POST">
     <input type="text" v-model="chosenCountry" disabled />
     <button>{{ $t("map.votingButton") }}</button>
    </form>
   </div>

   <EuropeMap @setCountry="setChosenCountry" :key="2" />
  </transition-group>
 </div>
</template>

<script>
import EuropeMap from "./EuropeMap.vue";

export default {
 data() {
  return {
   chosenCountry: null,
  };
 },

 methods: {
  setChosenCountry(country) {
   this.chosenCountry = country;
  },
 },

 components: { EuropeMap },
};
</script>

<style scoped>
.map-box {
 max-width: 1280px;
 margin: auto;
 padding: 50px 0 50px 20px;
 display: flex;
 color: #fcfcfc;
 transition: all 2s linear;
 justify-content: center;
}
.map-box p {
 max-width: 420px;
}
.map-enter-active,
.map-leave-active {
 transition: all 1s;
}
.map-enter,
.map-leave-to {
 opacity: 0;
 transform: translateY(30px);
}
.map-move {
 transition: all 0.2s linear;
}
form {
 display: flex;
 flex-direction: column;
 row-gap: 1rem;
}
button,
input {
 border: 1px solid #4e595f;
 background: none;
 color: #fcfcfc;
 outline: none;
 transition: all 0.2s linear;
}
input {
 padding-left: 1rem;
 height: 2rem;
}
input:hover {
 border: 1px solid #2bb3a0;
}
button {
 height: 2.5rem;
}
button:hover {
 cursor: pointer;
 background: #2bb3a0;
}
.switch {
 position: absolute;
 top: 1rem;
 left: 1rem;
 color: #fcfcfc;
 transition: all .1s linear;
}
.switch p {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
 margin: 0;
}
.switch p:hover{
  cursor: pointer;
  background-color: #2bb3a0;
}
</style>