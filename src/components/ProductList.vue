<template>
	<router-view></router-view>
	<h1>{{ msg }}</h1>
	<div class="outer">
		<div class="product-list">
			<div v-for="product in getProducts" :key="product.id">
				<ProductCard :product="product" />
			</div>
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
			const response = await axios.get('https://fakestoreapi.com/products');
			// console.log('response: ', response);
			let data = response.data;
			console.log('data: ', data);

			data = data.filter(
				(product) =>
					product.category === `men's clothing` ||
					product.category === `women's clothing`
			);

			this.setProducts({ value: data });
			return data;
		},

		// async fetchProducts() {
		// 	// https://my-json-server.typicode.com/sunpochin/vue-ecommerce/db
		// 	const ret = await axios.get(
		// 		'https://my-json-server.typicode.com/sunpochin/vue-ecommerce/db'
		// 	);
		// 	this.products = ret.data['products'];
		// 	console.log(
		// 		'ret.data: ',
		// 		ret.data['products'],
		// 		',length: ',
		// 		ret.data['products'].length
		// 	);
		// 	console.log('products: ', this.products[0]);
		// 	this.setProducts({ value: this.products });
		// },
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
/* .product-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly
} */

* {
	box-sizing: border-box;
}

.outer {
	display: flex;
	justify-content: center;
	margin: 1rem;
}

.product-list {
	display: grid;
	grid-template-columns: repeat(3, minmax(14rem, 18rem));
	gap: 1rem;
	margin: auto;
	padding: auto;
}

@media (max-width: 768px) {
	.product-list {
		/* background-color: green; */
		grid-template-columns: repeat(2, minmax(14rem, 18rem));
		justify-content: space-around;
	}
}
@media (max-width: 480px) {
	.product-list {
		/* background-color: red; */
		grid-template-columns: repeat(1, 36rem);
	}
}
</style>
