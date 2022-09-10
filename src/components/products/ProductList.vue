<template>
	<div>
		<router-view></router-view>
		<h1>{{ msg }}</h1>
		<div class="outer">
			<div class="product-list">
				<div v-for="product in listProducts" :key="product.id">
					<ProductCard :product="product" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import { mapActions, mapGetters } from 'vuex';
import CommonMixin from '@/utils/CommonMixin';
import store from '@/store';
export default {
	data() {
		return {
			productsList: [],
		};
	},
	components: {
		ProductCard,
	},
	computed: {
		listProducts() {
			console.log('mama: ', store.getters.getProducts);
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
			console.log('first', pro);
			store.commit('setProducts', pro);
			console.log('aliasPro: ', store.getters.getSubTotal );
		},
	},
	async mounted() {
		console.log('loaded products: ', this.productsList);
		if (this.productsList.length === 0) {
			console.log('fetch!!');
			// this.fetchProducts();
		}
		const { theJson } = CommonMixin();
		// console.log('retProductJson: ', retProductJson);
		// const data = await getJsonData('public/products.json');
		console.log('mounted data: ', theJson);
		this.setAll(theJson);
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