import Vue from 'vue';
import Router from 'vue-router';
import { constantRoutes } from './routes';
import { Cookie, StoreDate } from '@/util';
import { buildRouter } from '@/module';

Vue.use(Router);

const router = new Router({
  routes: constantRoutes
});

router.beforeEach((to, from, next) => {
  if(to.name !== 'login') {
      if(!StoreDate.getItem('token')) {
          next({path: '/login'});
      }
  }
  next();
})

router.afterEach((to, from) => {
    StoreDate.setItem('currentMenu', to.name);
})

export default router;

//页面刷新之后重新构建路由
const user = StoreDate.getItem('user');
if(user && user.rid) {
  buildRouter(user.rid);
};
