<template>
	<div class="product-card">
		<image-container :product="product"></image-container>

		<div class="details">
			<div class="card-title">{{ product.title }}</div>
			<div class="price">$Price: {{ product.price }}</div>
			<div class="row">
				<router-link
					type="button"
					class="btn-detail"
					:to="'/products/' + product.id"
					>Detail</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
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
.details {
	width: 80%;
	height: 100%;
	margin: 5px;
}

.card-title {
	font-weight: bold;
	height: 40%;
}
.price {
	height: 30%;
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

	cursor: pointer;
}

.product-card {
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */
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