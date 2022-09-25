<template>
	<div class="outer">
		<!-- <CarouselPartVue/> -->
		<div class="product-list">
			<div v-for="product in listProducts" :key="product.id">
				<ProductCard :product="product" />
			</div>
		</div>
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import { mapActions, mapGetters } from 'vuex';
// import CommonMixin from '@/utils/CommonMixin';
import store from '@/store';

// import CarouselPartVue from './CarouselPart.vue';


export default {
	data() {
		return {
			productsList: [],
		};
	},
	components: {
		ProductCard,
		// CarouselPartVue,
	},
	computed: {
		listProducts() {
			// console.log('mama data: ', store.getters.getProducts.data);
			return store.getters.getProducts;
		},
		...mapGetters({ getProducts: 'getProducts' }),
		// ...mapState(['productsList']),
	},
	props: ['cateID'],
	methods: {
		...mapActions({
			// setProducts: 'setProducts',
			// aliasPro: 'getProducts',
		}),
		setAll(pro) {
			store.commit('setProducts', pro);
			// console.log('aliasPro: ', store.getters.getSubTotal);
		},
	},
	mounted() {
		console.log('cateId: ', this.cateID);
		// if (this.productsList.length === 0) {
		// 	console.log('fetch!!');
		// 	// this.fetchProducts();
		// }
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

.carousel {
	border-radius: 10px;
	border-radius: 20px;
	margin-bottom: 10px;
	/* width: 100%;
 */
	/* padding-bottom: 10px; */
}

.outer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 1rem;
}

.product-list {
	display: grid;
	grid-template-columns: repeat(4, minmax(10rem, 18rem));
	gap: 1rem;
	justify-content: space-between;
}

@media (max-width: 1024px) {
	.product-list {
		grid-template-columns: repeat(3, minmax(10rem, 18rem));
	}
}

@media (max-width: 768px) {
	.product-list {
		/* background-color: green; */
		grid-template-columns: repeat(2, minmax(10rem, 18rem));
		justify-content: space-around;
		align-content: center;
	}
}

@media (max-width: 480px) {

	#app,
	body {
		margin: 0 auto;
		padding: 0 auto;
		width: 100%;
	}

	.product-list {
		grid-template-columns: repeat(1, 18rem);
		justify-content: space-around;
		align-content: center;
	}
}
</style>
