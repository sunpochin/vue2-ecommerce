<template>
	<div class="cartItem-card">
		<!-- <image-container :item="cartItem"></image-container> -->
		<!-- <div>{{ cartItem.id }}</div> -->
		<div class="card-title">{{ cartItem.title }}</div>
		<div class="card-image">
			<img :src="cartItem.image" />
		</div>
		<div>Price: {{ cartItem.price }}</div>
		<div>Count: {{ cartItem.count }}</div>

		<!-- <div class="row">
			<router-link
				type="button"
				class="btn-primary"
				:to="'/products/' + cartItem.id"
				>Details</router-link
			>
		</div> -->
	</div>
</template>

<script >
// import ImageContainer from './ImageContainer.vue';
export default {
	// components: { ImageContainer },
	props: {
		cartItem: Object,
	},
	// mounted() {
	// 	console.log('cartItem: ', this.cartItem);
	// },
};
</script>

<style>
.cartItem-card {
	display: flex;
	width: 100%;
	gap: 3px;
	border: 1px solid red;
	border-radius: 10px;
}
.card-title {
	width: 150px;
}
.card-image {
	height: 150px;
	width: 150px;
}
/* .row {
	margin-bottom: 10px;
}
.btn-primary {
	color: blue;
	border: 1px solid blue;
	border-radius: 5px;
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
} */
</style>