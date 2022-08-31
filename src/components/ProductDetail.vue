<template>
	<div class="product-detail">
		<image-container :product="product"></image-container>
		<p class="card-title">{{ product.title }}</p>
		<p class="card-title">{{ product.description }}</p>
		<p class="card-title">$Price: {{ product.price }}</p>
		<div class="row">
			<!-- <router-link
				type="button"
				class="btn-primary"
				:to="'/products/' + product.id"
				>Add to cart</router-link
			> -->
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import ImageContainer from './ImageContainer.vue';

export default {
	data() {
		return {
			product: Object,
		};
	},
	components: {
		ImageContainer,
	},
	props: ['productId'],
	methods: {
		...mapActions({
			setCurProduct: 'setCurProduct',
		}),
		async getSingle() {
			const addr = `https://fakestoreapi.com/products/${this.productId}`;
			console.log('addr: ', addr);
			const response = await fetch(addr);
			let data = await response.json();
			console.log('data: ', data);

			this.product = data;
			console.log('this.product: ', this.product);
			return data;
		},
	},
	mounted() {
		this.getSingle();
		// this.setCurProduct(ret);
		console.log('ProductDetail route', this.$route);
		console.log('productId: ', this.productId);
	},
};
</script>

<style>
.body {
	display: grid;
	grid-template-columns: repeat(1, 12rem);
}
.product-detail {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 1rem auto;

	border: 1px solid black;
	max-width: 400px;
	height: 500px;
	background-color: white;
	border-radius: 9px;
}
</style>