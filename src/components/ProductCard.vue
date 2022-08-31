<template>
	<div class="product-card">
		<image-container :product="product"></image-container>
		<p class="card-title">{{ product.title }}</p>
		<div class="row">
			<router-link
				type="button"
				class="btn-primary"
				:to="'/products/' + product.id"
				>Details</router-link
			>
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
.row {
	margin-bottom: 10px;
}
.btn-primary {
	color: blue;
	border: 1px solid blue;
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
