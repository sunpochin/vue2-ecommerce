<template>
	<router-view></router-view>
	<h1>{{ msg }}</h1>
	<div class="outer">
		<div class="product-list">
			<div v-for="product in getProducts" :key="product.id">
				<ProductCard :product="product" />
			</div>
		</div>
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import { mapGetters} from 'vuex';

export default {
	components: {
		ProductCard,
	},
	computed: {
		...mapGetters(['getProducts']),
	},
	props: {
		msg: String,
	},
	mounted() {
	},
};
</script>

<style>
/* .product-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly
} */

* {
	box-sizing: border-box;
}

.outer {
	display: flex;
	justify-content: center;
	margin: 1rem;
}

.product-list {
	display: grid;
	grid-template-columns: repeat(3, minmax(14rem, 18rem));
	gap: 1rem;
	margin: auto;
	padding: auto;
}

@media (max-width: 768px) {
	.product-list {
		/* background-color: green; */
		grid-template-columns: repeat(2, minmax(14rem, 18rem));
		justify-content: space-around;
	}
}
@media (max-width: 480px) {
	.product-list {
		/* background-color: red; */
		grid-template-columns: repeat(1, 36rem);
	}
}
</style>
