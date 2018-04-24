import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import filter from './filter';
import directive from './directive';
import i18n from './lang';
import svgIcon from './icons';

Vue.config.productionTip = false;

Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});

Object.keys(directive).forEach(key => {
  Vue.directive(key, directive[key]);
});

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
