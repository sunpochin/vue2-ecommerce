<template>
	<div>
		<Slide class="slide_wrapper" @openMenu="handleOpenMenu" @closeMenu="handleCloseMenu">
			<a id="men" href="#" v-on:click="filterProducts(id)">
				<span>Men</span>
			</a>
			<a id="women" href="#" @click="filterProducts(id)">
				<span>Women</span>
			</a>
			<a id="all" href="#" @click="filterProducts">
				<span>All</span>
			</a>
		</Slide>
		<div class="upmost">
			<div class="left">
				<div class="logo">
					<h2><a href="/">鞋鞋網</a> </h2>
					<h2>{{msg}}</h2>
				</div>
				<Menu>
					<main id="page-wrap">
						<nav class="main-nav">
							<router-link class="route" to="/products">Men</router-link>
							<router-link class="route" to="/products">Women</router-link>
							<router-link class="route" to="/products">All</router-link>
						</nav>
					</main>
				</Menu>
				<!-- <router-link class="route" to="#">Contact</router-link> -->
			</div>
			<div class="right">
				<router-link class="route" to="/cart">購物車：{{ getTotalCount }}
				</router-link>
			</div>
		</div>

	</div>

	<!-- <button class="buttonWrapper" @click="haha">
						<div class="quantity">{{ getTotalCount }}</div>
					</button>
					<router-link to="/login">登入/註冊</router-link> -->
	<!-- <p>login state:{{ IsLoggedIn }}</p>
		<button v-show="!IsLoggedIn" @click="login">Login</button>
		<button v-show="IsLoggedIn" @click="logout">Logout</button> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import store from '@/store';
import router from '@/router';
import { Slide } from 'vue-burger-menu'  //in this case we are using `Slide`


export default {
	props: ["msg"],
	components: {
		Slide
	},
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
		filterProducts(filter) {
			console.log('filter: ', filter)
			
		},
		handleOpenMenu() {
		},
		handleCloseMenu() {
		},
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

.upmost {
	display: flex;
	align-items: center;
	/* align-content: center; */
	justify-content: space-between;
	color: hsl(220, 13%, 13%);
	font-size: 32px;
	padding: 2rem;
}

.left {
	display: flex;
	align-items: center;
	align-content: center;
	gap: 20px;
	font-size: 20px;
}


.logo {
	min-width: 130px;
	margin-right: 50px;
}

.logo a {
	font-weight: bold;
	color: black;
	text-decoration: none;
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

.main-nav {
	display: flex;
	max-width: 100%;
	justify-content: space-between;
	background-color: white;
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
	background-color: hsl(220, 13%, 13%);
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
	border-bottom: 1px solid hsl(220, 13%, 13%);
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
	color: black;
}

nav a {
	text-decoration: none;

	font-weight: bold;
	color: grey;
}

.slide_wrapper {
	display: none;
}

/* nav a.router-link-exact-active {
	color: black;
} */
@media (max-width: 768px) {
	.slide_wrapper {
		display: inline;
	}

	.upmost * {
		font-size: 24px;
		gap: 5px;
	}

	body {
		padding: 10px
	}

	.logo {
		margin-left: 100px;
		min-width: 120px;
		font-size: 1.5rem;
	}

	.main-nav {
		display: none;
	}
}

@media (max-width: 480px) {
	.left {
		flex-direction: column;
	}

	.logo {
		font-size: 1rem;
	}

}
</style>