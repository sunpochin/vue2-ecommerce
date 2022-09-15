<template>
	<div class="cartview">
		<div class="containerTable">
			<div v-if="!showTable">
				<h2 class="empty-cart">購物車是空的</h2>
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
		<hr />
		<div v-if="showTable" class="clsSubtotal">
			<div>
				<p>總金額: {{ getSubTotal }} USD</p>
				<p>貨品數: {{ getTotalCount }} 個</p>
			</div>
		</div>
	</div>
</template>

<script>
// import axios from 'axios';
import { mapState } from 'vuex';
import store from '@/store';
// import CommonMixin from '@/utils/CommonMixin';
// const { theJson } = CommonMixin();

export default {
	components: {
		// CartCard,
	},
	computed: {
		showTable() {
			return store.getters.getCartItems.length === 0 ? false : true;
		},
		getCartProducts() {
			// const dummy = {
			// 	id: -1,
			// 	title: '',
			// 	price: 0,
			// 	description: '',
			// 	category: '',
			// 	image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
			// 	rating: { rate: 3.9, count: 120 },
			// };
			if (store.getters.getCartItems.length >= 1) {
				console.log('getCartProducts: ', store.getters.getCartItems);
				return store.getters.getCartItems;
			} else {
				const ary = [];
				// ary.push(dummy);
				return ary;
			}
		},
		getSubTotal() {
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
		async removeItem(item) {
			console.log('minus item: ', item);
			store.commit('removeItem', item);
			this.$forceUpdate();
		},
		async addItem(item) {
			console.log('add item: ', item);
			store.commit('addToCart', item);
			this.$forceUpdate();
			// this.postToCart(item);
		},
	},
	mounted() {
	},
};
</script>

<style scoped>
/* https://www.google.com/search?q=how+to+make+a+round+checkbox+with+check+mark&client=ubuntu&hs=5Pr&channel=fs&sxsrf=ALiCzsYBd-_g38CzBPg_4kLbQaLmNWZ8xQ%3A1662686596298&ei=hJUaY9jsEcCFr7wPxuCWqAs&ved=0ahUKEwjYvsefxob6AhXAwosBHUawBbUQ4dUDCA0&uact=5&oq=how+to+make+a+round+checkbox+with+check+mark&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgoIABBHENYEELADOgcIIRCgARAKSgQIQRgASgQIRhgAUO8IWP0PYNIRaAJwAXgAgAG_AYgB7giSAQMzLjeYAQCgAQHIAQrAAQE&sclient=gws-wiz

https://stackoverflow.com/questions/29617200/how-to-make-checkboxes-rounded

*/

.empty-cart{
	text-align: center;
}

.clsSubtotal div {
	margin-left: auto;
	margin-right: 20px;
	text-align: right;
}

/* .clsSubtotal {
	margin-right: 20px;
} */

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
	width: 2rem;
	height: 2rem;
}

.clsCount {
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
}

.containerImg {
	max-width: 100px;
	text-overflow: ellipsis;
	overflow: hidden;
}

/* table {
	border-collapse: collapse;
}

tr {
	border-bottom: 1pt solid black;
} */

.containerDesc {
	max-width: 90px;
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
