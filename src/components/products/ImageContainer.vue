<template>
	<div class="image-container">
		<img :src="product.img[0]" />
	</div>
</template>

<script >
export default {
	props: {
		product: Object,
	},
	mounted() {
		// console.log('image-container: ', this.product);
	},
};
</script>
<style scoped>
.image-container {
	/* display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box; */

	border-bottom: 1px solid rgb(191, 191, 191);
	width: 300px;
	height: 300px;
	/* max-width: 100%;
	max-height: 100%; */
}
img {
	max-width: 100%;
	max-height: 100%;
}
</style>