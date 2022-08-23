<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png">
     -->
		<ProductList></ProductList>
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import ProductList from '@/components/ProductList.vue';

export default {
	name: 'HomeView',
	components: {
		// HelloWorld,
		ProductList,
	},
};
</script>