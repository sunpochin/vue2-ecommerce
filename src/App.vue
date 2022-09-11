<template>
	<div id="app">
		<HeaderPart />
		<router-view />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import HeaderPart from './components/HeaderPart.vue';
export default {
	name: 'App',
	components: {
		HeaderPart,
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