<template>
 <div>
  <div class="count" ref="count">{{ chosenCount }}</div>
  <svg
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   width="560"
   height="430"
   viewBox="500 0 100 700"
   version="1.1"
  >
   <g>
    <path
     v-for="item in countries"
     :key="item.name"
     :d="item.d"
     :id="item.id"
     :name="item.name"
     :count="item.count"
     ref="path"
     @click="setCountry"
     @mouseover="showVisibleCount"
     @mouseout="hideVisibleCount"
    ></path>
    <circle cx="399.9" cy="390.8" id="0"></circle>
    <circle cx="575.4" cy="412" id="1"></circle>
    <circle cx="521" cy="266.6" id="2"></circle>
   </g>
  </svg>
  <i18n path='map.hover' tag='p' class="hover-hint">
    <template v-slot:break>
      <br>
    </template>
  </i18n>
 </div>
</template>

<script>
import countries from "./countries";

export default {
 data() {
  return {
   countries: countries,
   chosenCount: null,
  };
 },

 mounted() {
  this.$refs.path.forEach((item) => {
   this.setBgColor(item);
  });
 },

 methods: {
  setCountry(item) {
   const chosenCountry = item.target.getAttribute("name");
   this.$emit("setCountry", chosenCountry);
  },

  showVisibleCount(item) {
   this.chosenCount = item.target.getAttribute("count");
   const inspect = item.target.getBoundingClientRect();
   const countElement = this.$refs.count;
   const left = inspect.left + (inspect.right - inspect.left) / 2;
   const top = inspect.top - 40;

   countElement.style.display = "flex";
   countElement.style.left = left + "px";
   countElement.style.top = top + "px";
  },

  hideVisibleCount() {
   const countElement = this.$refs.count;
   countElement.style.display = "none";
  },

  setBgColor(item) {
   const count = +item.getAttribute("count");

   if (count > 30) {
    item.style.fill = "rgb(43 179 160)";
   } else if (count >= 10) {
    item.style.fill = "rgb(38 128 117)";
   } else if (count > 5) {
    item.style.fill = "rgb(33 76 73)";
   } else if (count > 2) {
    item.style.fill = "rgb(31 54 55)";
   } else if (count > 0) {
    item.style.fill = "rgb(30 39 42)";
   }
  },
 },
};
</script>

<style scoped>
.count {
 display: none;
 width: 40px;
 height: 40px;
 background-color: rgba(22, 24, 27, 0.87);
 border-radius: 100%;
 position: absolute;
 align-items: center;
 justify-content: center;
 font-weight: 900;
 color: rgb(217, 230, 138);
 border: 1px solid rgb(217, 230, 138);
}
path {
 fill: rgb(22, 24, 27);
 stroke: #57cbcc;
 transition: all .12s linear;
}
path:hover {
 cursor: pointer;
 fill: rgb(217, 230, 138) !important;
}
.hover-hint {
 text-align: center;
}
</style>
