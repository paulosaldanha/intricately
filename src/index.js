import 'Styles/main.scss';
import Vue from 'vue';
//import HelloWorld from 'Components/HelloWorld.vue';
import App from './App.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false;

import CompanyDataComponent from './components/CompanyDataComponent.vue';
import CompanyPageComponent from './components/CompanyPageComponent.vue';

const routes = [
  {
      name: 'page',
      path: '/page',
      component: CompanyPageComponent
  },
  {
    name: 'index',
    path: '/page',
    component: CompanyPageComponent
  },
  {
      name: 'data',
      path: '/data',
      component: CompanyDataComponent
  },
];

const router = new VueRouter({ routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
// new Vue({
//   render: createElement => createElement(HelloWorld),
//   el: '#app'
// });
