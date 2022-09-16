// mutations.spec.ts
// import { it, describe, expect, test, beforeAll } from 'vitest';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';
import axios from 'axios';
import productJson from '@/assets/products.json';
import CommonMixin from '@/utils/CommonMixin';

// import { game } from '@/store/game/game';
// import store from '@/store';
// destructure assign `mutations`
// const { addToCart } = mutations;
const cartState = {
	itemsInCart: [],
};
const productsState = {
	productsList: [],
};

describe('Add product', () => {
	beforeAll(async () => {
		const { getJsonData, theJson } = CommonMixin();
		// const dataMixin = await getJsonData('@/assets/products.json');
		// console.log('dataMixin: ', dataMixin);
		console.log('before all');
		// use local data instead, faster.
		let data = productJson;
		mutations.setProducts(productsState, data);
	});

	// const newItem = {
	// 	id: '001',
	// 	name: 'laptop',
	// 	price: 256,
	// 	modal: 'A-type',
	// 	count: 1,
	// };
	let newItem = {"product_id": "prod_1", "title": "title3"}

	test('getProducts', () => {
		let list = getters.getProducts(productsState);
		console.log('getProducts list: ', list.slice(0, 3));
	});
	test('add a product not in cart', () => {
		// 購物「種類」+ 1
		// 購物「總數」+ 1
		let cateCount = getters.getCategoryCount(cartState);
		let itemsCount = getters.getTotalCount(cartState, newItem);
		expect(cateCount).toEqual(0);
		expect(itemsCount).toEqual(0);

		mutations.addToCart(cartState, newItem);

		let afterCateCount = getters.getCategoryCount(cartState);
		let afterCount = getters.getTotalCount(cartState);

		expect(afterCount).toEqual(1);
		expect(afterCateCount).toEqual(1);
	});

	test('add a product already in cart', async () => {
		// Category count should remain the same.
		// The count of added category should += 1.
		// Total count should += 1
		// 購物「種類」不改變
		// 購物「總數」+= 1
		let count = getters.getTotalCount(cartState);
		let cateCount = getters.getCategoryCount(cartState);
		let countBy = getters.getCountBy(cartState, newItem);
		console.log('origin count: ', count);
		console.log('origin countBy: ', countBy);

		await mutations.addToCart(cartState, newItem);

		let afterCount = getters.getTotalCount(cartState);
		let afterCateCount = getters.getCategoryCount(cartState);
		let afterCountBy = getters.getCountBy(cartState, newItem);
		console.log('afterCountBy: ', afterCountBy);

		expect(afterCount).toEqual(count + 1);
		expect(afterCateCount).toEqual(cateCount);
		expect(afterCountBy).toEqual(countBy + 1);
	});

	it('add to cart', async () => {});
});
