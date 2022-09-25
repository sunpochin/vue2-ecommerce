<template>
	<div class="product-card" @click="jumpToDetail">
		<!-- <image-container :product="product"></image-container> -->
		<div class="center-cropped">
			<img :src="product.img[0]" />
		</div>
		<div class="card-details">
			<div class="card-title">{{ product.title }}</div>
			<div class="card-price">$Price: {{ product.price }}</div>
		</div>
	</div>
</template>

<script scoped>
import store from '@/store';
import router from '@/router';

export default {
	// components: { ImageContainer },
	props: {
		product: Object,
	},
	methods: {
		addToCart() {
			store.commit('addToCart', this.product);
		},
		jumpToDetail() {
			let str = '/products/' + this.product.id
			console.log('id: ', str)
			router.push(str)
		},
	}
};
</script>

<style scoped>
/* https://stackoverflow.com/questions/11552380/how-to-automatically-crop-and-center-an-image */
.center-cropped {
	width: 100%;
	height: 250px;
	/* background-position: center center;
	background-repeat: no-repeat; */
	overflow: hidden;
}

.center-cropped img {
	object-fit: cover;
	height: 100%;
	width: 100%;

	border-radius: 9px;
}

.product-card {
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;

	/* border: 1px solid black; */
	/* max-width: 300px; */
	height: 400px;
	/* background-color: grey; */
	border-radius: 9px;
}

.card-details {
	height: 60px;
}

.card-title {
	font-weight: bold;
	font-size: 16px;
	height: 55%;

	/* text-overflow: ellipsis;
	overflow: hidden; */
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