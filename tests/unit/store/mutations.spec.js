// mutations.spec.ts
// import { it, describe, expect, test, beforeAll } from 'vitest';
import rootMutations from '@/store/mutations';
import rootActions from '@/store/actions';
import rootGetters from '@/store/getters';
import productJson from '@/assets/products.json';
import CommonMixin from '@/utils/CommonMixin';

import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const cartState = {
	itemsInCart: [],
};
const productsState = {
	productsList: [],
};

createLocalVue().use(Vuex);
const state = {
	//mock state values
	count: 0,
	productsList: [],
	isLoggedIn: false,
	curProduct: null,
	itemsInCart: [],
};

const store = new Vuex.Store({
	state,
	mutations: rootMutations,
	actions: rootActions,
	getters: rootGetters,
});

describe('Add product', () => {
	beforeAll(async () => {
		const { getJsonData, theJson } = CommonMixin();
		// const dataMixin = await getJsonData('@/assets/products.json');
		// console.log('dataMixin: ', dataMixin);
		console.log('before all');
		// use local data instead, faster.
		let data = productJson;
	});

	describe('mutations', () => {
		it('testCase#1', () => {
			store.commit('mutationToTest', 1);
			expect(state.count).toBe(1);
		});
	});

	let newItem = { product_id: 'prod_1', title: 'title3' };

	test('getProducts', () => {
		let list = store.getters.getProducts;
		// console.log('getProducts list: ', list.slice(0, 3));
	});
	test('add a product not in cart', () => {
		// 購物「種類」+ 1
		// 購物「總數」+ 1
		console.log('store.getters: ', store.getters);
		let cateCount = store.getters.getCategoryCount;
		let itemsCount = store.getters.getTotalCount;
		expect(cateCount).toEqual(0);
		expect(itemsCount).toEqual(0);

		// mutations.addToCart(cartState, newItem);
		store.commit('addToCart', newItem);

		let afterCateCount = store.getters.getCategoryCount;
		let afterCount = store.getters.getTotalCount;

		expect(afterCount).toEqual(1);
		expect(afterCateCount).toEqual(1);
	});

	test('add a product already in cart', () => {
		// Category count should remain the same.
		// The count of added category should += 1.
		// Total count should += 1
		// 購物「種類」不改變
		// 購物「總數」+= 1
		let count = store.getters.getTotalCount;
		let cateCount = store.getters.getCategoryCount;
		// let countBy = store.getters.getCountBy(newItem);
		// console.log('origin count: ', count);
		// console.log('origin countBy: ', countBy);
		let pro;
		pro = store.commit('addToCart', newItem);

		let afterCount = store.getters.getTotalCount;
		let afterCateCount = store.getters.getCategoryCount;
		// let afterCountBy = getters.getCountBy(cartState, newItem);
		// console.log('afterCountBy: ', afterCountBy);

		expect(afterCount).toEqual(count + 1);
		expect(afterCateCount).toEqual(cateCount);
		// expect(afterCountBy).toEqual(countBy + 1);
	});
});
