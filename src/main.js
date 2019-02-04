import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Photo from './components/Photo.vue';
import About from './components/About.vue';
import '../public/css/style.css';


Vue.use(VueRouter);
Vue.config.productionTip = false;


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Photo },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes // short for `routes: routes`
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
