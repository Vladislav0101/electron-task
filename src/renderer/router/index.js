import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: require("../pages/Main.vue").default,
      children: [
        {
          path: "",
          name: "header",
          components: {
            header: require("../components/Common/Header.vue").default,
          },
        },
        {
          path: "/map",
          name: "map",
          components: {
            header: require("../components/Common/Header.vue").default,
            map: require("../components/Map/MapBox.vue").default,
          },
        },
      ],
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
