import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

// Vue.prototype.$hostname = 'http://localhost:8000';
Vue.prototype.$hostname = 'https://fastapi-pac.onrender.com';
Vue.use(router);
Vue.use(store);

Vue.config.productionTip = false;

new Vue({
	beforeCreate: function () {
		console.log('globa: ', this.$hostname);
	},
	render: (h) => h(App),
	router,
	store,
}).$mount('#app');
