<template>
	<router-view></router-view>
	<h1>Product List</h1>
	<h1>{{ msg }}</h1>
	<div class="product-list">
		<div v-for="product in getProducts" :key="product.id">
			<ProductCard :product="product" />
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import ProductCard from './ProductCard.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
	data() {
		return {
			// products: [],
		};
	},
	components: {
		ProductCard,
	},
	computed: {
		...mapGetters(['getProducts']),
		// getProducts() {
		// 	console.log(
		// 		'this.$store.getters.getProducts: ',
		// 		this.$store.getters.getProducts
		// 	);
		// 	// return this.products;
		// 	return this.$store.getters.getProducts;
		// },
	},
	methods: {
		...mapActions({
			setProducts: 'setProducts',
		}),
		async fetchProducts() {
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
			this.setProducts({ value: this.products });
		},
	},
	props: {
		msg: String,
	},
	mounted() {
		console.log('productList route', this.$route);
		this.fetchProducts();
	},
};
</script>

<style>
.product-list {
	display: flex;
	flex-wrap: wrap;
}
</style>