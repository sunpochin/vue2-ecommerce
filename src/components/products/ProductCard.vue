<template>
	<div class="product-card" @click="addToCart">
		<!-- <image-container :product="product"></image-container> -->
		<img :src="product.img[0]" />
		<div class="card-details">
			<div class="card-title">{{ product.title }}</div>
			<div class="card-price">$Price: {{ product.price }}</div>
			<!-- <div class="row">
				<button @click="addToCart" class="btn-detail">Add to cart</button>
				<router-link
					type="button"
					class="btn-detail"
					:to="'/products/' + product.id"
					>Detail</router-link
				>
			</div> -->
		</div>
	</div>
</template>

<script scoped>
import store from '@/store';
// import ImageContainer from './ImageContainer.vue';
export default {
	// components: { ImageContainer },
	props: {
		product: Object,
	},
	methods: {
		addToCart() {
			store.commit('addToCart', this.product);
		},
	}
};
</script>

<style scoped>
img {
	/* https: //stackoverflow.com/questions/11552380/how-to-automatically-crop-and-center-an-image */

	/* Do not scale the image */
	object-fit: fill;
	/* Center the image within the element */
	object-position: 50% 50%;
	height: 250px;
	max-width: 100%;
	border-radius: 9px;
}

.product-card {
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: auto;

	/* border: 1px solid black; */
	max-width: 300px;
	height: 400px;
	/* background-color: grey; */
	border-radius: 9px;
}

.card-details {
	width: 80%;
	height: 100px;
	margin: 5px;
}

.card-title {
	font-weight: bold;
	height: 55%;
	padding: 0.5rem 0 0.5rem 0;

	text-overflow: ellipsis;
	overflow: hidden;
}

.card-price {
	padding: 0.5rem 0 0.5rem 0;
	height: 15%;
}

.row {
	display: flex;
	align-items: center;
	justify-content: center;
	/* margin-bottom: 20px; */
	padding: auto;
	height: 20%;
	width: 100%;
}

.btn-detail {
	display: flex;
	align-items: center;
	justify-content: center;

	text-decoration: none;
	height: 3rem;
	width: 100%;
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


@media (max-width: 1200) {
	html {
		font-size: 85%;
	}
}

@media (max-width: 768) {
	html {
		font-size: 55%;
	}
}
</style>