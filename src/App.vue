<template>
	<div id="app">
		<HeaderPart />
		<router-view />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import HeaderPart from './components/HeaderPart.vue';
import CommonMixin from '@/utils/CommonMixin';
import store from '@/store';

export default {
	name: 'App',
	components: {
		HeaderPart,
	},
	mounted() {
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