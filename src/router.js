import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SearchResults from './views/SearchResults.vue';
import ImageDetail from './views/ImageDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/search/:tag',
      name: 'searchResults',
      component: SearchResults,
      props: true,
    },
    {
      path: '/image/:id',
      name: 'imageDetail',
      component: ImageDetail,
      props: true,
    },
  ],
});
