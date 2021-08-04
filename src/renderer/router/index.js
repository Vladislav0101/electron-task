import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/pages/Main.vue').default
    },
    {
      path: '/map',
      name:'map',
      component: require('@/components/Map/MapBox.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
