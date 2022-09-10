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
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
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
	background-color: rgb(50, 50, 50);
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 10px;
	padding: 10px;
	font-size: 10px;
}

nav a:hover {
	transition: transform 0.9s ease-in-out;
	transform: scale(1);
	color: rgb(13, 195, 13);
}

nav a {
	font-weight: bold;
	color: rgb(13, 195, 13);
}

nav a.router-link-exact-active {
	color: rgb(229, 226, 241);
}

/*  */
/*  */
:root {
	font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;

	color-scheme: light dark;
	color: rgba(255, 255, 255, 0.87);
	background-color: #242424;

	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;
}

a {
	font-weight: 500;
	color: #646cff;
	text-decoration: inherit;
}
a:hover {
	color: #535bf2;
}

body {
	margin: 0;
	/* display: flex; */
	place-items: center;
	min-width: 320px;
	min-height: 100vh;
}

h1 {
	font-size: 3.2em;
	line-height: 1.1;
}

button {
	border-radius: 8px;
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: #1a1a1a;
	cursor: pointer;
	transition: border-color 0.25s;
}
button:hover {
	border-color: #646cff;
}
button:focus,
button:focus-visible {
	outline: 4px auto -webkit-focus-ring-color;
}

.card {
	padding: 2em;
}

#app {
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;
	text-align: center;
}

@media (prefers-color-scheme: light) {
	:root {
		color: #213547;
		background-color: #ffffff;
	}
	a:hover {
		color: #747bff;
	}
	button {
		background-color: #f9f9f9;
	}
}
</style>