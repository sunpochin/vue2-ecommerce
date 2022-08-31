<template>
	<div class="image-container">
		<img :src="product.image" />
	</div>
</template>

<script>
export default {
	props: {
		product: Object,
	},
	mounted() {
		// console.log('image-container: ', this.product);
	},
};
</script>
<style>
.image-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;

	width: 100%;
	height: 10rem;
	margin: 1rem;
	
  border-bottom: 1px solid rgb(191,191,191);

	/* max-height: 450px; */
}
img {
	max-width: 100%;
	max-height: 100%;
}
</style>