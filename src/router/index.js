import Vue from 'vue';
import Router from 'vue-router';
import { constantRoutes } from './routes';
import { Cookie } from 'util';
import { buildRouter } from 'module';

Vue.use(Router);

const router = new Router({
  routes: constantRoutes
});

export default router;

//页面刷新之后重新构建路由
const rid = sessionStorage.getItem('rid');
if(rid) {
  buildRouter(rid);
};