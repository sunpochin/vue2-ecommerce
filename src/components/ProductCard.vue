<template>
	<div class="card">
		<img :src="product.imageUrl" class="card-img-top product-image" />
		<div class="">
			<h5 class="">{{ product.name }}</h5>
			<div class="row">
				<router-link
					type="button"
					class="btn btn-primary btn-lg"
					:to="'/products/' + product.id"
					>Details</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		product: Object,
	},
	mounted() {
		// console.log('product: ', this.product);
	},
};
</script>

<style>
.card {
	display: flex;
	flex-direction: column;

	width: 300px;
	height: 450px;
	background-color: pink;
	margin: 20px;
	border-radius: 9px;
}

.card .product-image {
	height: 300px;
}
.card-img,
.card-img-top {
	width: 100%;
}

/* .card-img, .card-img-top {
	border-top-left-radius: calc(0.25rem - 1px);
	border-top-right-radius: calc(0.25rem - 1px);
	flex-shrink: 0;
	width: 100%;
}

img {
	vertical-align: middle;
	border-style: none;
} */
</style>