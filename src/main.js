import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import filter from './filter';
import directive from './directive';
import components from './components';
import i18n from './lang';
import svgIcon from './icons';
import VueForm from 'vue-form';

Vue.use(VueForm);

Vue.config.productionTip = false;

Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});

Object.keys(directive).forEach(key => {
  Vue.directive(key, directive[key]);
});

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
});

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
