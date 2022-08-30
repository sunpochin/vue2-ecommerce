<template>
	<div class="upmost">
		<div class="logo">Logo</div>
		<nav>
			<router-link to="/products">Products</router-link> |
			<router-link to="/cart">Cart </router-link> |
			<router-link to="/about">About</router-link> |
		</nav>
	</div>
	<router-view />
	<HeadCompo></HeadCompo>
</template>

<script>
import HeadCompo from './components/HeadCompo.vue';
// import { mapActions, mapGetters } from 'vuex';

export default {
	components: { HeadCompo },
	methods: {},
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
}

body {
  font-family: Poppins;
}

ul {
  padding: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
}

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

nav {
	background-color: rgb(50, 50, 50);
	display: flex;
	justify-content: space-around;
	gap: 30px;
	padding: 30px;
}

nav a:hover {
	transition: transform 0.9s ease-in-out;
	transform: scale(1.4);
}

nav a {
	font-weight: bold;
	color: green;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>