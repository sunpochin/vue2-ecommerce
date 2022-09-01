import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/products/ProductList.vue';
import ProductDetail from '../components/products/ProductDetail.vue';
import CartView from '../components/CartView.vue';
import HomeView from '../components/home/HomeView.vue'

const router = createRouter({
	history: createWebHistory('/vue-ecommerce/'),
	routes: [
		{
			path: '/',
			component: HomeView,
			// redirect: '/products',
		},
		{
			path: '/products/:productId',
			component: ProductDetail,
			props: true,
		},
		{
			path: '/products',
			component: ProductList,
		},
		{
			path: '/cart',
			// name: 'cart',
			component: CartView,
		},
		{
			path: '/login',
			// name: 'cart',
			component: CartView,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ '../components/AboutView.vue'),
		},
	],
	linkActiveClass: 'active',
});


export default router;
