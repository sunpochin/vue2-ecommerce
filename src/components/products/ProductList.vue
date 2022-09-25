<template>
	<div class="outer">
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
			let all = store.getters.getProducts;
			if ("all" === this.cateID || undefined === this.cateID) {
				return all;
			}
			// not all, women or men.
			let filtered = all.filter((item) => {
				console.log('item.category[0].gender, this.cateID:', item.category[0].gender, this.cateID)
				if (item.category[0].gender.includes(this.cateID) ) {
					return item;
				}
			}); 
			return filtered;
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
