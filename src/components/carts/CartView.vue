<template>
	<div class="cartview">
		<div class="containerTable">
			<div v-if="!showTable">
				<h2>購物車是空的</h2>
			</div>
			<table v-if="showTable">
				<thead>
					<tr class="clstr">
						<!-- <th scope="col">
							<div>
								<label class="containerCheckbox cartProduct">
									<input type="checkbox" id="regular" name="optradio"
								/></label>
							</div>
						</th> -->
						<th scope="col">圖</th>
						<th scope="col">品名</th>
						<!-- <th scope="col">
						<div class="containerDesc">description</div>
					</th> -->
						<th scope="col">價格</th>
						<th scope="col">數量</th>
					</tr>
				</thead>
				<tr v-for="item in getCartProducts" :key="item.id">
					<!-- <td>
						<div>
							<label class="containerCheckbox cartProduct">
								<input type="checkbox" id="regular" name="optradio"
							/></label>
						</div>
					</td> -->
					<td>
						<div class="containerImg">
							<img :src="item.image" />
						</div>
					</td>
					<td>{{ item.title }}</td>
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
		<div v-if="showTable" class="clsSubtotal">
			<div>
				<p>總金額: {{ getSubTotal }} USD</p>
				<p>貨品數: {{ getTotalCount }} 個</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import CommonMixin from '@/utils/CommonMixin';
import store from '@/store';

export default {
	components: {
		// CartCard,
	},
	computed: {
		showTable() {
			return store.getters.getCartItems.length === 0 ? false : true;
		},
		getCartProducts() {
			const dummy = {
				id: -1,
				title: '',
				price: 0,
				description: '',
				category: '',
				image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
				rating: { rate: 3.9, count: 120 },
			};
			if (store.getters.getCartItems.length >= 1) {
				console.log('getCartProducts: ', store.getters.getCartItems);
				return store.getters.getCartItems;
			} else {
				const ary = [];
				ary.push(dummy);
				return ary;
			}
		},
		getSubTotal() {
			console.log('getSubTotal: ', store.getters.getSubTotal);
			return store.getters.getSubTotal;
		},
		getTotalCount() {
			return store.getters.getTotalCount;
		},
		...mapState(['itemsInCart']),
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

		setProducts(pro) {
			store.commit('setProducts', pro);
		},
	},
	async created() {
		// todo: remove this temp codes for doing layout of cart.
		const { theJson } = CommonMixin();
		// const { data } = await getJsonData('public/products.json');
		// console.log('mounted data: ', data);
		this.setProducts(theJson);
		console.log('created: ');

		store.commit('addToCart', theJson[0]);
		store.commit('addToCart', theJson[0]);
		store.commit('addToCart', theJson[1]);
		store.commit('addToCart', theJson[2]);
	},
};
</script>

<style scoped>
/* https://www.google.com/search?q=how+to+make+a+round+checkbox+with+check+mark&client=ubuntu&hs=5Pr&channel=fs&sxsrf=ALiCzsYBd-_g38CzBPg_4kLbQaLmNWZ8xQ%3A1662686596298&ei=hJUaY9jsEcCFr7wPxuCWqAs&ved=0ahUKEwjYvsefxob6AhXAwosBHUawBbUQ4dUDCA0&uact=5&oq=how+to+make+a+round+checkbox+with+check+mark&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgoIABBHENYEELADOgcIIRCgARAKSgQIQRgASgQIRhgAUO8IWP0PYNIRaAJwAXgAgAG_AYgB7giSAQMzLjeYAQCgAQHIAQrAAQE&sclient=gws-wiz  

https://stackoverflow.com/questions/29617200/how-to-make-checkboxes-rounded

*/

.clsSubtotal div {
	margin-left: auto;
	margin-right: 0;
	text-align: right;
}

.clsSubtotal {
	margin-right: 0;
}

.cartview {
	margin: 0;
	padding: 0;
	width: 100%;
}
.containerTable {
	width: 100%;
}
table {
	width: 100%;
}
button {
	margin: 10px;
	width: 1rem;
}

.clsCount {
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
}
.containerImg {
	/* max-width: 100px; */
}

.containerDesc {
	/* max-width: 100px; */
}
.clstr {
	border: 1px solid black;
	background-color: grey;
}
td,
th {
	/* border: 1px solid grey; */
	padding: 0.5rem;
}
/* .cart-list {
	display: flex;
	flex-direction: column;

	grid-template-columns: repeat(3, minmax(14rem, 18rem));
	gap: 10rem;
	margin: auto;
	padding: auto;
} */
</style>