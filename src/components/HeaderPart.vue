<template>
	<div class="upmost">
		<div class="logo">Fashion shop</div>
		<nav>
			<!-- <router-link to="/">首頁</router-link> -->
			<router-link to="/products">產品列表</router-link>
			<!-- <router-link to="/cart">購物車</router-link> -->
			<button class="buttonWrapper" @click="haha">
				<div class="quantity">{{ getTotalCount }}</div>
			</button>
			<router-link to="/login">登入/註冊</router-link>
		</nav>
		<!-- <p>login state:{{ IsLoggedIn }}</p>
		<button v-show="!IsLoggedIn" @click="login">Login</button>
		<button v-show="IsLoggedIn" @click="logout">Logout</button> -->
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import store from '@/store';
import router from '@/router';

export default {
	computed: {
		getTotalCount() {
			return store.getters.getTotalCount;
		},

		...mapGetters(['IsLoggedIn']),
		// IsLoggedIn() {
		// 	console.log('this.$store: ', this.$store);
		// 	console.log('IsLoggedIn: ', this.$store.getters.IsLoggedIn);
		// 	return this.$store.getters.IsLoggedIn;
		// },
	},
	methods: {
		haha() {
			router.push('/cart');
		},
		...mapActions({
			login: 'login',
			logout: 'logout',
		}),

		// logout() {
		// 	this.$store.dispatch({
		// 		type: 'setLoggedIn',
		// 		value: false,
		// 	});
		// },
		// login() {
		// 	// this.$store.state.counter++;
		// 	// this.$store.commit('increment');
		// 	// this.$store.commit('increase', { value: 4 });
		// 	// this.$store.commit({
		// 	//   type:'increase',
		// 	//   value: 10,
		// 	//   haha: 3,
		// 	//   });
		// 	console.log('login');
		// 	this.$store.dispatch({
		// 		type: 'setLoggedIn',
		// 		value: true,
		// 	});
		// 	// this.$store.dispatch('increment');
		// },
	},
};
</script>

<style scoped>
.buttonWrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	font-weight: bold;
}
/* .buttonWrapper:active {
	transform: scale(1.02);
}
.buttonWrapper:hover {
	transform: scale(1.1);
} */

.quantity {
	position: absolute;
	top: 2rem;
	right: 14rem;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50px;
	/* background-color: ${({ theme }) => theme.colors.red}; */
	background-color: pink;
	font-size: 2rem;
	font-weight: bold;
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
	/* min-width: 440px; */
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
</style>