<template>
	<div class="product-card">
		<image-container :product="product"></image-container>
		<div class="card-details">
			<h1 class="card-title">{{ product.title }}</h1>
			<div class="product-desc">{{ product.description }}</div>
			<br />
			<div class="cart-price">$Price: {{ product.price }}</div>
			<div class="row">
				<button @click="addToCart" class="btn-detail">Add to cart</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import ImageContainer from './ImageContainer.vue';
import store from '@/store';

export default {
	data() {
		return {
			product: Object(), // todo: using Object (instead of Object() ) will cause a build error
		};
	},
	components: {
		ImageContainer,
	},
	props: ['productId'],
	methods: {
		addToCart() {
			store.commit('addToCart', this.product);
		},
		...mapActions({
			setCurProduct: 'setCurProduct',
			// addToCart: 'addToCart',
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

<style scoped>
.body {
	display: grid;
	grid-template-columns: repeat(1, 12rem);
}
.product-desc {
	max-height: 200px;
}
.product-card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 1rem auto;

	border: 1px solid black;
	max-width: 400px;
	height: 600px;
	background-color: white;
	border-radius: 9px;
}

.btn-detail {
	display: flex;
	align-items: center;
	justify-content: center;

	text-decoration: none;
	height: 2rem;
	width: 90%;
	color: grey;
	background-color: black;
	border: 1px solid grey;
	border-radius: 5px;

	transition: 0.3s;
	cursor: pointer;
}

.btn-detail:hover {
	transform: scale(1.05);
	/* background-color: grey; */
}
.btn-detail:active {
	background-color: grey;
	color: white;
}
</style>
