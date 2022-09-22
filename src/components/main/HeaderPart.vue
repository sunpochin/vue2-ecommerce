<template>
	<div class="upmost">
		<div class="logo">
			<h4><router-link class="route" to="/products">Fashion Shop</router-link></h4>
			<h2>{{msg}}</h2>

		</div>
		<nav class="main-nav">
			<!-- <router-link to="/">首頁</router-link> -->
			<router-link class="route" to="/products">產品</router-link>
			<router-link class="route" to="/cart">購物車：{{ getTotalCount }} </router-link>

			<!-- <button class="buttonWrapper" @click="haha">
				<div class="quantity">{{ getTotalCount }}</div>
			</button>
			<router-link to="/login">登入/註冊</router-link> -->
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
	props: ["msg"],
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
	background-color: black;
}

.logo {
	display: flex;
	align-items: center;
	align-content: center;

	color: pink;
	font-size: 32px;
	padding: 1rem;

}

a {
	text-decoration: none;
}

.logo h4 {
	cursor: pointer;
}



.logo h4:after {
	content: '';
	display: block;
	width: 0%;
	height: 2px;
	margin: 5px 0;
	background-color: #9f0;
	transition: width .5s .3s;
}

.logo:hover h4:after {
	width: 100%;
}



nav {
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	background-color: rgb(50, 50, 50);
	gap: 30px;
	padding: 10px;
	font-size: 24px;
}

/* https://codepen.io/bad_printer/pen/QWLYjeZ */
nav a:after {
	content: '';
	position: absolute;
	left: 50%;
	right: 50%;
	bottom: 0px;
	height: 2px;
	border-bottom: 1px solid #9f0;
	transition: .9s;
}

nav a:hover:after {
	left: 0.1em;
	right: 0.1em;
}

/* different effect */
/* nav a:after {
	content: '';
	display: block;
	width: 0%;
	height: 2px;
	margin: 5px 0;
	background-color: #9f0;
	transition: width .5s .3s;
}

nav a:hover:after {
	width: 100%;
} */

nav a:hover {
	transition: transform 0.9s ease-in-out;
	transform: scale(1.1);
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

@media (max-width: 480px) {
	.upmost {
		flex-direction: column;
	}
}
</style>