export default {
	setProducts(context, payload) {
		// console.log('setProducts context: ', payload);
		context.commit('setProducts', payload);
	},
	setCurProduct(context, payload) {
		context.commit('setCurProduct', payload);
	},
	addToCart(context, payload) {
		console.log('payload addToCart: ', payload);
		context.commit('addToCart', payload);
	},
	removeItem(context, payload) {
		context.commit('removeItem', payload);
	},
	openCheckout(context, payload) {
		context.commit('openCheckout', payload);
	},

	login(context) {
		context.commit('setLoggedIn', { value: true });
	},
	logout(context) {
		context.commit('setLoggedIn', { value: false });
	},
};
