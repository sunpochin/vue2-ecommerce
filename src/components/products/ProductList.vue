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
import CommonMixin from '@/utils/CommonMixin';
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
	props: {
		msg: String,
	},
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
	async mounted() {
		// console.log('loaded products: ', this.productsList);
		if (this.productsList.length === 0) {
			console.log('fetch!!');
			// this.fetchProducts();
		}
		const { AllProducts } = CommonMixin();
		console.log('ssss ', AllProducts)
		// console.log('retProductJson: ', retProductJson);
		// const data = await getJsonData('public/products.json');
		// console.log('mounted data: ', theJson);
		// this.setAll(AllProducts);
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
}

.outer {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.product-list {
	display: grid;
	grid-template-columns: repeat(4, minmax(10rem, 18rem));
	gap: 1rem;
	justify-content: space-between;
	margin: 1rem;
}

@media (max-width: 1024px) {
	.product-list {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media (max-width: 768px) {
	.product-list {
		/* background-color: green; */
		grid-template-columns: repeat(2, 1fr);
		justify-content: space-around;
		align-content: center;
	}
}

@media (max-width: 480px) {
	.product-list {
		grid-template-columns: repeat(1, 1fr);
		justify-content: space-around;
		align-content: center;
	}
}
</style>
