<template>
	<div class="productCard">
		<h3>Name: {{ product.name }}</h3>
	</div>
</template>

<script>
export default {
	props: {
		product: Object,
	},
	// data() {
	// 	return {
	// 		product: Object,
	// 	};
	// },
	mounted() {
		console.log('product: ', this.product);
	},
};
</script>

<style>
.productCard {
	width: 200px;
	height: 200px;
	background-color: pink;
  margin: 10px;
  border-radius: 9px;
}
</style>