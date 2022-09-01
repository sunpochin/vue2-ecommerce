<template>
	<div class="upmost">
		<div class="logo">Logo</div>
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/products">Products</router-link> |
			<router-link to="/cart">Cart</router-link> |
			<router-link to="/login">Login</router-link>
		</nav>
	</div>
	<router-view />
	<HeadCompo></HeadCompo>
</template>

<script>
import { mapActions } from 'vuex';
import HeadCompo from './components/HeadCompo.vue';
import axios from 'axios';

export default {
	mounted() {
		console.log('productList route', this.$route);
		this.fetchProducts();
	},
	components: { HeadCompo },
	methods: {
		...mapActions({
			setProducts: 'setProducts',
		}),
		async fetchProducts() {
			const response = await axios.get('https://fakestoreapi.com/products');
			// console.log('response: ', response);
			let data = response.data;
			console.log('data: ', data);

			data = data.filter(
				(product) =>
					product.category === `men's clothing` ||
					product.category === `women's clothing`
			);

			this.setProducts({ value: data });
			return data;
		},

		// async fetchProducts() {
		// 	// https://my-json-server.typicode.com/sunpochin/vue-ecommerce/db
		// 	const ret = await axios.get(
		// 		'https://my-json-server.typicode.com/sunpochin/vue-ecommerce/db'
		// 	);
		// 	this.products = ret.data['products'];
		// 	console.log(
		// 		'ret.data: ',
		// 		ret.data['products'],
		// 		',length: ',
		// 		ret.data['products'].length
		// 	);
		// 	console.log('products: ', this.products[0]);
		// 	this.setProducts({ value: this.products });
		// },
	},
	// computed: {
	// 	// ...mapGetters(['isLoggedIn', 'numbers/finalCounter']),
	// },
};
</script>

<style>
/* reset styles */
* {
	color: inherit;
	margin: 0;
	padding: 0;
}

.upmost {
	margin: 0;
	padding: 0;
}

nav {
	background-color: rgb(50, 50, 50);
	display: flex;
	justify-content: space-around;
	gap: 30px;
	padding: 10px;
}

nav a:hover {
	transition: transform 0.9s ease-in-out;
	transform: scale(1.4);
}

nav a {
	font-weight: bold;
	color: rgb(7, 103, 7);
}

nav a.router-link-exact-active {
	/* color: #42b983; */
	color: red;
}

body {
	font-family: Poppins;
}

ul {
	padding: 0;
	list-style-type: none;
}

/* a {
	text-decoration: none;
} */

hr {
	border: 0;
	border-top: 1px dotted #efefef;
}

img {
	max-width: 100%;
}

.card {
	display: block;
	padding: 0.75rem;
	border: 1px solid #ddd;
	box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
	border-radius: 20px;
}
.card .card-title {
	font-size: 1rem;
	padding-bottom: 0.75rem;
	font-weight: bold;
}
.card .card-body {
	font-size: 1rem;
}
.card .card-body a {
	text-decoration: underline;
}

#app {
	margin: 0;
	padding: 0;

	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
.upmost {
	display: flex;
	justify-content: space-between;
	background-color: rgb(0, 0, 0);
}
.logo {
	display: flex;
	align-items: center;
	align-content: center;

	color: pink;
	font-size: 32px;
}
</style>