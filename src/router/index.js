import Vue from 'vue';
import Router from 'vue-router';
import { staticRoutes } from './routes';

Vue.use(Router);

export default new Router({
  routes: staticRoutes
});
