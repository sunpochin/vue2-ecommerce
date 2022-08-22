// src/store/product/actions.js
import axios from 'axios';

// Action to get products list

export function getProducts({ commit }) {
	let url =
		'https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products';
	axios
		.get(url)
		.then((response) => {
			commit('setProducts', response.data);
		})
		.catch((error) => {
			console.log(error);
		});
}

export function productDetails({ commit }, id) {
	let url =
		'https://my-json-server.typicode.com/sunpochin/vue-ecommerce/products';
	axios
		.get(url, { params: { id: id } })
		.then((response) => {
			commit('setProduct', response.data[0]);
		})
		.catch(function (error) {
			console.log(error);
		});
}