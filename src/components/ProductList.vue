<template>
	<router-view></router-view>
	<h1>Product List</h1>
	<h1>{{ msg }}</h1>
	<div class="product-list">
		<div v-for="product in products" :key="product.id">
			<ProductCard :product="product" />
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import ProductCard from './ProductCard.vue';

export default {
	data() {
		return {
			products: [],
		};
	},
	components: {
		ProductCard,
	},
	methods: {
		async getProducts() {
			// https://my-json-server.typicode.com/sunpochin/vue-ecommerce/db
			const ret = await axios.get(
				'https://my-json-server.typicode.com/sunpochin/vue-ecommerce/db'
			);
			this.products = ret.data['products'];
			console.log(
				'ret.data: ',
				ret.data['products'],
				',length: ',
				ret.data['products'].length
			);
			console.log('products: ', this.products[0]);
		},
	},
	props: {
		msg: String,
	},
	mounted() {
		console.log('productList route', this.$route);
		this.getProducts();
	},
};
</script>

<style>
.product-list {
	display: flex;
	flex-wrap: wrap;
}
</style>