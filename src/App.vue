<template>
	<div id="app">
		<HeaderPart />
		<router-view />
		<FooterPart />
		<CheckOutHaha />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import HeaderPart from './components/main/HeaderPart.vue';
import FooterPart from './components/main/FooterPart.vue';
import CheckOutHaha from './components/checkout/CheckOutHaha';
import CommonMixin from './utils/CommonMixin';
import store from '@/store';
import axios from 'axios';


export default {
	name: 'App',
	components: {
    HeaderPart,
    FooterPart,
    CheckOutHaha,
},
	methods: {
		setProducts(pro) {
			store.commit('setProducts', pro);
		},
		async getCartFromServer() {
			console.log('App.vue this: ', this.$hostname)
			let curAddress = this.$hostname;
			let cateAddress = curAddress + '/items/list'
			console.log('cateAddress: ', cateAddress);
			let response = await axios.get(cateAddress);
			let items = response.data.items
			store.commit('updateCartFromServer', items)
		}

	},
	created() {
		// todo: remove this temp codes for doing layout of cart.
		const { theJson, shoes } = CommonMixin();
		// const { data } = await getJsonData('public/products.json');
		// console.log('mounted data: ', data);
		this.setProducts(theJson);
		this.setProducts(shoes);
		console.log('App created: ');
		this.getCartFromServer();
	},
};
</script>

<style>
* {
	color: inherit;
	margin: 0;
	padding: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

#app {
	margin: 0;
	padding: 0;
	width: 100%;

	/* font-family: Avenir, Helvetica, Arial, sans-serif; */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: hsl(220, 13%, 13%);
	font-size: 62.5%;
}

body {
	font-family: 'Kumbh Sans', sans-serif;
	padding: 0 100px 0 100px;
}

@media (max-width: 768px) {
	body {
		margin: 0;
		padding: 0;
		width: 100%;
	}

	/* body {
		padding: 0 40px 0 40px;
	} */
}
</style>