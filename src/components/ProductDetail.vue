<template>
	<div>Product Detail: {{ productId }}</div>
</template>

<script>
export default {
	props: ['productId'],
	mounted() {
		console.log('ProductDetail route', this.$route);
		console.log('productId: ', this.productId);
	},
};
</script>