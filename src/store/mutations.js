import Vue from 'vue';
import axios from 'axios';
import CommonMixin from '@/utils/CommonMixin';
const { theJson } = CommonMixin();

export default {
	mutationToTest(state, payload) {
		state.count += payload;
	},
	openCheckout(state, payload) {
		state.isCheckoutOpen = payload;
	},
	updateCartFromServer(state, payload) {
		console.log('updateCartFromServer payload: ', payload);
		Object.keys(payload).forEach((element) => {
			let item = payload[element];
			console.log('item: ', item);
			let newProductID = item.product_id.replace('prod_', '');
			console.log(
				'element: ',
				element,
				',item: ',
				item,
				' newProductID: ',
				newProductID,
				typeof newProductID
			);

			let findItem = theJson.find((item) => item.id == newProductID);
			console.log('find item: ', findItem);
			findItem.count = payload[element].quantity;
			console.log('newProductID: ', newProductID);
			console.log('updateCartFromServer: ', findItem);
			state.itemsInCart.push(findItem);
		});
	},

	setProducts(state, payload) {
		// console.log('setProducts: ', payload);
		state.productsList = payload;
	},
	// add an item into cart.
	async addToCart(state, payload) {
		console.log('addToCart: ', Vue.prototype.$hostname);
		let curAddress = Vue.prototype.$hostname;

		const index = state.itemsInCart.findIndex((idx) => {
			return idx.id === payload.id;
		});
		// Vue.set(state.itemsInCart, index, {
		// 	formName: payload.formName,
		// 	data: { count: 0, haha: 0 },
		// });
		console.log('addToCart index: ', index);
		if (index > -1) {
			// assign state.itemsInCart to a new array for re-rendering.
			let newAry = state.itemsInCart.slice(0);
			newAry[index].count++;
			console.log('newAry: ', newAry);
			console.log('newAry[index].count: ', newAry[index].count);
			state.itemsInCart = newAry;
		} else {
			payload.count = 1;
			// console.log('payload: ', payload);
			state.itemsInCart.push(payload);
		}
		// Vue.$set(state, 'itemsInCart', payload);
		// console.log('itemsInCart: ', state.itemsInCart);
		let item = payload;

		let itemsAddress = curAddress + '/items/add';
		let data = {
			product_id: 'prod_' + item.id,
			title: item.title,
			description: item.description,
			price: item.price,
		};
		// console.warn('add data: ', data);
		try {
			await axios
				.post(itemsAddress, data)
				.then((res) => console.log('add item:', res));
		} catch (e) {
			// throw e;
		}
	},
	async removeItem(state, payload) {
		console.log('removeItem: ', Vue.prototype.$hostname);
		let curAddress = Vue.prototype.$hostname;
		const index = state.itemsInCart.findIndex((idx) => {
			return idx.id === payload.id;
		});
		// console.log('removeItem index: ', index);
		if (index > -1) {
			let newAry = state.itemsInCart.slice(0);
			newAry[index].count--;
			console.log('newAry: ', newAry);
			console.log('newAry[index].count: ', newAry[index].count);
			state.itemsInCart = newAry;

			if (state.itemsInCart[index].count <= 0) {
				state.itemsInCart.splice(index, 1);
			}
			// console.log(
			// 	'state.itemsInCart[index].count: ',
			// 	state.itemsInCart[index].count
			// );
		} else {
			// should not go here.
			console.log('should not go here.');
			// throw Exception('should not go here.');
		}
		// console.log('itemsInCart: ', state.itemsInCart);
		// to backend
		let item = payload;
		let itemsAddress = curAddress + '/items/decrease/' + 'prod_' + item.id;
		try {
			await axios.get(itemsAddress);
		} catch (e) {
			console.log('Error happend while axios ', e.message);
		}
	},
};

// export interface ProductItem {
// 	id: string;
// 	name: null | string;
// 	count: number;
// }

// export interface CartItems {
// 	itemsInCart;
// }

// export interface ProductsList {
// 	productsList;
// }

// export const mutations = {
// 	setProducts(state: ProductsList, payload: ProductsList) {
// 		state.productsList = payload.productsList;
// 	},
// 	getProducts(state: ProductsList) {
// 		return state.productsList;
// 	},
// 	//
// 	getTotalCount(state: CartItems) {
// 		const result = state.itemsInCart.reduce((acc, currentValue) => {
// 			console.log('acc: ', acc);
// 			console.log('currentValue: ', currentValue.count);
// 			return acc + currentValue.count;
// 		}, 0);
// 		console.log('result: ', result);
// 		return result;
// 	},

// 	// get the count of categories in cart.
// 	getCategoryCount(state: CartItems) {
// 		return state.itemsInCart.length;
// 	},

// 	// get the count
// 	getCountBy(state: CartItems, payload) {
// 		const index = state.itemsInCart.findIndex((idx) => {
// 			return idx.id === payload.id;
// 		});
// 		console.log('getCountBy: ', index);

// 		let ret = 0;
// 		if (index > -1) {
// 			ret = state.itemsInCart[index].count;
// 		} else {
// 			ret = 0;
// 		}
// 		return ret;
// 	},

// 	// add an item into cart.
// 	addToCart(state: CartItems, payload) {
// 		const index = state.itemsInCart.findIndex((idx) => {
// 			return idx.id === payload.id;
// 		});
// 		console.log('index: ', index);
// 		if (index > -1) {
// 			state.itemsInCart[index].count++;
// 		} else {
// 			const haha = [...state.itemsInCart, payload];
// 			console.log('haha: ', haha);
// 			state.itemsInCart.push(payload);
// 			// state.itemsInCart = haha;
// 		}
// 		// console.log('itemsInCart: ', state.itemsInCart);
// 	},
// };

// module.exports = { mutations };
// // export default { mutations };
