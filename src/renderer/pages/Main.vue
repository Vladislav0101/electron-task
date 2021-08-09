<template>
 <div class="box">
  <router-view name="header"></router-view>
  <main>
   <router-link :to="{ name: 'map' }" v-if="$route.name !== 'map'"
    >map
   </router-link>
   <router-view name="map"></router-view>
  </main>
 </div>
</template>

<style scoped>
main {
 padding: 0 3rem;
}
</style>