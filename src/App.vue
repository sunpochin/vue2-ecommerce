<template>
	<div id="app">
		<div class="upmost">
			<div class="logo">Fashion shop</div>
			<nav>
				<!-- <router-link to="/">首頁</router-link> -->
				<router-link to="/products">產品列表</router-link>
				<router-link to="/cart">購物車</router-link>
				<router-link to="/login">登入/註冊</router-link>
			</nav>
		</div>
		<router-view />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
export default {
	name: 'App',
	components: {
		// HelloWorld,
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

.upmost {
	display: flex;
	max-width: 100%;
	justify-content: space-between;
	background-color: rgb(0, 0, 0);
}

.logo {
	display: flex;
	align-items: center;
	align-content: center;

	color: pink;
	font-size: 32px;
	padding: 1rem;
}

nav {
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	background-color: rgb(50, 50, 50);
	gap: 30px;
	padding: 10px;
	font-size: 24px;
	min-width: 440px;
}

nav a:hover {
	transition: transform 0.9s ease-in-out;
	transform: scale(1);
	color: lightgreen;
}

nav a {
	text-decoration: none;

	font-weight: bold;
	color: white;
}

nav a.router-link-exact-active {
	color: lightgreen;
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
	.logo, nav {
		font-size: 12px;
		gap: 5px;
		min-width: 120px;
	}
}
</style>