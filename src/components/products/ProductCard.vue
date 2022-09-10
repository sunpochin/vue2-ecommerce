<template>
	<div class="product-card">
		<image-container :product="product"></image-container>
		<p class="card-title">{{ product.title }}</p>
		<p>$Price: {{ product.price }}</p>

		<div class="row">
			<router-link
				type="button"
				class="btn-detail"
				:to="'/products/' + product.id"
				>Details</router-link
			>
		</div>
	</div>
</template>

<script >
import ImageContainer from './ImageContainer.vue';
export default {
	components: { ImageContainer },
	props: {
		product: Object,
	},
	mounted() {
		// console.log('product: ', this.product);
	},
};
</script>

<style>
.card-title {
	font-weight: bold;
}
.row {
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	padding: auto;
	height: 3rem;
	width: 12rem;
}
.btn-detail {
	display: flex;
	align-items: center;
	justify-content: center;

	text-decoration: none;
	height: 3rem;
	color: grey;
	background-color: black;
	border: 1px solid grey;
	border-radius: 5px;
}

.product-card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: auto;

	border: 1px solid black;
	max-width: 300px;
	height: 350px;
	background-color: white;
	border-radius: 9px;
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