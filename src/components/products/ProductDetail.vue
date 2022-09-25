<template>
	<div class="product-card">
		<div class="images-holder">
			<div>
				<img class="big-image" :src="getBig" alt="" />
			</div>
			<div class="small_conatiner">
				<div v-for="(item, idx) in getImgs" :key="idx">
					<img class="small_img" :src="item" v-on:click="changeBig(idx)" alt="thumbnail" />
				</div>
			</div>
		</div>
		<div class="details">
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
	</div>
</template>

<style scoped>
.body {
	display: grid;
	grid-template-columns: repeat(1, 12rem);
}

.product-card {
	display: flex;
	justify-content: space-between;
	gap: 100px;
	/* width: 100%; */
	max-width: 1024px;

	height: 700px;
	padding: 50px;
	margin: auto;
}

.images-holder {
	min-width: 448px;
	/* margin: 0px; */
}

.big-image {
	width: 448px;
	height: 448px;
	/* width: 100%; */
}


.small_conatiner {
	display: flex;
	max-width: 100%;
	max-height: 100%;
	justify-content: space-between;
	gap: 10px;
	margin: 20px 0;
	overflow: hidden;
}

.small_img {
	width: 100px;
	height: 100px;
	border-radius: 10px;
	cursor: pointer;
}

.big-image,
.small {
	border-radius: 10px;
}


.product-desc {
	max-height: 200px;
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


<script>
import { mapActions } from 'vuex';
// import ImageContainer from './ImageContainer.vue';
import store from '@/store';

export default {
	data() {
		return {
			bigImgIdx: 0,
			product: Object(), // todo: using Object (instead of Object() ) will cause a build error
		};
	},
	components: {
		// ImageContainer,
	},
	props: ['productId'],
	computed: {
		getBig() {
			console.log('getBig: ', this.product)
			console.log('getBig: ', this.product.img[0])
			return this.product.img[this.bigImgIdx];
		},
		getImgs() {
			console.log('array: ', this.product.img)
			return this.product.img;
		},
	},
	methods: {
		changeBig(idx) {
			console.log('idx: ', idx)
			this.bigImgIdx = idx 
		},
		addToCart() {
			store.commit('addToCart', this.product);
		},
		...mapActions({
			setCurProduct: 'setCurProduct',
			// addToCart: 'addToCart',
		}),
		async getSingle() {
			let products = store.getters.getProducts;
			console.log('let products: ', products);
			let index = products.findIndex((item) => `${this.productId}` == item.id)
			this.product = products[index]
			console.log('this.product: ', this.product);
			return this.product;
		},
	},
	created() {
		this.getSingle();
		// this.setCurProduct(ret);
		console.log('ProductDetail route', this.$route);
		console.log('productId: ', this.productId);
	},
};
</script>

