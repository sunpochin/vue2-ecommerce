<template>
	<div>
		<div class="containerTable">
			<table>
				<thead>
					<tr class="clstr">
						<th scope="col">
							<div>
								<label class="containerCheckbox cartProduct">
									<input type="checkbox" id="regular" name="optradio"
								/></label>
							</div>
						</th>
						<th scope="col">縮圖</th>
						<th scope="col">品名</th>
						<!-- <th scope="col">
						<div class="containerDesc">description</div>
					</th> -->
						<th scope="col">價格</th>
						<th scope="col">數量</th>
					</tr>
				</thead>
				<tr v-for="item in getCartProducts" :key="item.id">
					<td>
						<div>
							<label class="containerCheckbox cartProduct">
								<input type="checkbox" id="regular" name="optradio"
							/></label>
						</div>
					</td>
					<td>
						<div class="containerImg">
							<img :src="item.image" />
						</div>
					</td>
					<td>{{ item.title }}</td>
					<!-- <td>
					<div class="containerDesc">
						{{ item.description }}
					</div>
				</td> -->
					<td>{{ item.price }}</td>
					<td>
						<div class="clsCount">
							<button @click="removeItem(item)">-</button>
							{{ item.count }}
							<button @click="addItem(item)">+</button>
						</div>
					</td>
				</tr>
			</table>
		</div>
		<div class="clsSubtotal">
			<h2>Subtotal: {{ getSubTotal }}</h2>
			<h2>getTotalCount: {{ getTotalCount }}</h2>
		</div>
	</div>
</template>

<script>
// import CartCard from './CartCard.vue';
import { mapState } from 'vuex';
import CommonMixin from '@/utils/CommonMixin';
import store from '@/store';
// import Vue from 'vue';

export default {
	components: {
		// CartCard,
	},
	computed: {
		getCartProducts() {
			console.log('getCartProducts: ', store.getters.getCartItems);
			return store.getters.getCartItems;
		},
		getSubTotal() {
			return store.getters.getSubTotal;
		},
		...mapState(['itemsInCart', 'getTotalCount']),
	},
	// data() {
	// 	return {
	// 		productsInCart: Object,
	// 	};
	// },
	methods: {
		removeItem(item) {
			console.log('minus item: ', item);
			store.commit('removeItem', item);
			this.$forceUpdate();
		},
		addItem(item) {
			console.log('add item: ', item);
			store.commit('addToCart', item);
			this.$forceUpdate();
		},

		haha(pro) {
			store.commit('setProducts', pro);
		},
	},
	async mounted() {
		// todo: remove this temp codes for doing layout of cart.
		const { theJson } = CommonMixin();
		// const { data } = await getJsonData('public/products.json');
		// console.log('mounted data: ', data);
		const data = theJson;
		this.haha(data);

		store.commit('addToCart', data[0]);
		store.commit('addToCart', data[0]);
		store.commit('addToCart', data[1]);
		store.commit('addToCart', data[1]);
		store.commit('addToCart', data[1]);
		store.commit('addToCart', data[2]);
		store.commit('addToCart', data[2]);
	},
};
</script>

<style scoped>
/* https://www.google.com/search?q=how+to+make+a+round+checkbox+with+check+mark&client=ubuntu&hs=5Pr&channel=fs&sxsrf=ALiCzsYBd-_g38CzBPg_4kLbQaLmNWZ8xQ%3A1662686596298&ei=hJUaY9jsEcCFr7wPxuCWqAs&ved=0ahUKEwjYvsefxob6AhXAwosBHUawBbUQ4dUDCA0&uact=5&oq=how+to+make+a+round+checkbox+with+check+mark&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgoIABBHENYEELADOgcIIRCgARAKSgQIQRgASgQIRhgAUO8IWP0PYNIRaAJwAXgAgAG_AYgB7giSAQMzLjeYAQCgAQHIAQrAAQE&sclient=gws-wiz  

https://stackoverflow.com/questions/29617200/how-to-make-checkboxes-rounded

*/

.containerTable {
	margin: 2rem;
}

button {
	margin: 15px;
}

.clsCount {
	width: 250px;
}
.containerImg {
	max-width: 100px;
}

.containerDesc {
	max-width: 100px;
}
.clstr {
	border: 1px solid red;
	background-color: grey;
}
td,
th {
	border: 1px solid grey;
	padding: 1rem;
}
.cart-list {
	display: flex;
	flex-direction: column;

	/* grid-template-columns: repeat(3, minmax(14rem, 18rem)); */
	gap: 10rem;
	margin: auto;
	padding: auto;
}
</style>