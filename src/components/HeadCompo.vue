<template>
	<p>login state:{{ IsLoggedIn }}</p>
	<button v-show="!IsLoggedIn" @click="login">Login</button>
	<button v-show="IsLoggedIn" @click="logout">Logout</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters(['IsLoggedIn']),
		// IsLoggedIn() {
		// 	console.log('this.$store: ', this.$store);
		// 	console.log('IsLoggedIn: ', this.$store.getters.IsLoggedIn);
		// 	return this.$store.getters.IsLoggedIn;
		// },
	},
	methods: {
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
