<template>
	<div id="app">
		<HeaderPart />
		<router-view />
		<FooterPart />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import HeaderPart from './components/HeaderPart.vue';
import FooterPart from '@/components/FooterPart.vue';
import CommonMixin from '@/utils/CommonMixin';
import store from '@/store';

import axios from 'axios';
const devAddress = 'http://localhost:8000'
let curAddress = devAddress


export default {
	name: 'App',
	components: {
		HeaderPart,
		FooterPart,
	},
	methods: {
		setProducts(pro) {
			store.commit('setProducts', pro);
		},
		async getCartFromServer() {
			let cateAddress = curAddress + '/items/cate'
			console.log('cateAddress: ', cateAddress);
			let response = await axios.get(cateAddress);
			let items = response.data
			store.commit('updateCartFromServer', items)
		}

	},
	mounted() {
		// todo: remove this temp codes for doing layout of cart.
		const { theJson } = CommonMixin();
		// const { data } = await getJsonData('public/products.json');
		// console.log('mounted data: ', data);
		this.setProducts(theJson);
		console.log('created: ');
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

#app {
	margin: 0;
	padding: 0;
	width: 100%;

	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
}

@media (max-width: 768px) {
	#app,
	body {
		margin: 0 auto;
		padding: 0 auto;
		width: 100%;
	}
	/* .upmost * {
		font-size: 12px;
		gap: 5px;
		min-width: 220px;
	} */
	.logo {
		min-width: 120px;
	}
	.logo,
	nav {
		font-size: 12px;
		gap: 5px;
		min-width: 120px;
	}
}
</style>