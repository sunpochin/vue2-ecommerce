export default {
	getTotalCount(state) {
		return state.itemsInCart.reduce((acc, curItem) => {
			// console.log('acc: ', acc);
			// console.log('curItem: ', curItem.count);
			return acc + curItem.count;
		}, 0);
		// console.log('result: ', result);
		// return result;
	},

	// get the count of categories in cart.
	getCategoryCount(state) {
		return state.itemsInCart.length;
	},
	getSubTotal(state) {
		console.log('itemsInCart: ', state);
		const ret = state.itemsInCart
			.reduce((acc, curItem) => {
				return acc + curItem.price * curItem.count;
			}, 0)
			.toFixed(2);
		// console.log('getSubTotal.itemsInCart: ', state.itemsInCart);
		// console.log('getSubTotal: ', ret);
		return ret;
	},
	getCartItems(state) {
		return state.itemsInCart;
	},
	// get the count
	getCountBy(state, payload) {
		const index = state.itemsInCart.findIndex((idx) => {
			return idx.id === payload.id;
		});
		console.log('getCountBy: ', index);

		let ret = 0;
		if (index > -1) {
			ret = state.itemsInCart[index].count;
		} else {
			ret = 0;
		}
		return ret;
	},

	IsLoggedIn(state) {
		return state.isLoggedIn;
	},
	getProducts(state) {
		// console.log('getter getProducts: ', state);
		return state.productsList;
	},
	// getCurProduct(state) {
	// 	return state.curProduct;
	// },
};
