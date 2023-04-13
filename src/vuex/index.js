import Vue from 'vue';
import Vuex from 'vuex';

import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
	state() {
		return {
			count: 0,
			productsList: [],
			isLoggedIn: false,
			curProduct: null,
			itemsInCart: [],
			isCheckoutOpen: false,
		};
	},
	// modules: {
	// 	numbers: counterModule,
	// },
	mutations: rootMutations,
	actions: rootActions,
	getters: rootGetters,
});

// import { createStore } from 'vuex';
// import rootMutations from './mutations';
// import rootActions from './actions';
// import counterModule from './counter/index.js';
// import rootGetters from './getters';

// const store = createStore({
	// modules: {
	// 	numbers: counterModule,
	// },
	// mutations: rootMutations,
	// actions: rootActions,
	// getters: rootGetters,
// 	state() {
// 		return {
// 			count: 0,
// 			products: [],
// 			isLoggedIn: false,
// 			curProduct: null,
// 		};
// 	},
// 	mutations: {
// 		setLoggedIn(state, payload) {
// 			state.isLoggedIn = payload.value;
// 		},
// 		setProducts(state, payload) {
// 			console.log('mutations payload: ', payload);
// 			state.products = payload.value;
// 		},
// 		setCurProduct(state, payload) {
// 			state.curProduct = payload.value;
// 		},
// 	},

// 	actions: {
// 		// setLoggedIn(context, payload) {
// 		// 	console.log('payload: ', payload);
// 		// 	context.commit('setLoggedIn', { value: payload.value });
// 		// },
// 		login(context) {
// 			context.commit('setLoggedIn', { value: true });
// 		},
// 		logout(context) {
// 			context.commit('setLoggedIn', { value: false });
// 		},
// 		setProducts(context, payload) {
// 			context.commit('setProducts', payload);
// 		},
// 		setCurProduct(context, payload) {
// 			context.commit('setCurProduct', payload);
// 		},
// 	},
// 	getters: {
// 		counter(state) {
// 			return state.count;
// 		},
// 		IsLoggedIn(state) {
// 			return state.isLoggedIn;
// 		},
// 		getProducts(state) {
// 			return state.products;
// 		},
// 		getCurProduct(state) {
// 			return state.curProduct;
// 		},
// 	},
// });

// // https://stackoverflow.com/questions/34645731/export-more-than-one-variable-in-es6
//export default store ;
