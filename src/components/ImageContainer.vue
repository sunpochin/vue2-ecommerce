<template>
	<div class="image-container">
		<img :src="product.image"/>
	</div>
</template>

<script>
export default {
	props: {
		product: Object,
	},
	mounted() {
		console.log('image-container: ', this.product);
	},
};
</script>
<style>
.image-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;

	max-width: 100%;
  height: 260px;
  margin: 1rem;
	/* max-height: 450px; */
	background-color: pink;
}
img {
  /* max-width: 80%; */
  height: 100%;
}
</style>