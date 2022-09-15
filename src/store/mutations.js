// import Vue from 'vue';
import axios from 'axios';
import CommonMixin from '@/utils/CommonMixin';
const { theJson } = CommonMixin();

// const devAddress = 'http://localhost:8000';
const prodAddress = 'https://fastapi-pac.onrender.com';
let curAddress = prodAddress;

export default {
	updateCartFromServer(state, payload) {
		console.log('updateCartFromServer payload: ', payload);
		Object.keys(payload).forEach((element) => {
			let newID = element.replace('prod_', '');
			
			let item = theJson.find(item => item.id == newID)
			console.log('item: ', item);
			item.count = payload[element];
			console.log('newID: ', newID);
			console.log('updateCartFromServer: ', item);
			state.itemsInCart.push(item);
		});
	},

	setProducts(state, payload) {
		// console.log('setProducts: ', payload);
		state.productsList = payload;
	},
	// add an item into cart.
	async addToCart(state, payload) {
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
		console.warn('add data: ', data);
		await axios
			.post(itemsAddress, data)
			.then((res) => console.log('add item:', res));
	},
	async removeItem(state, payload) {
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
		await axios.get(itemsAddress);
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
