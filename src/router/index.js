import Vue from 'vue';
import VueRouter from 'vue-router';
// import HomeView from '../components/HomeView.vue';
// import ProductsView from '../components/OldProductsView.vue';

import ProductList from '../components/products/ProductList.vue';
import ProductDetail from '../components/products/ProductDetail.vue';
import CartView from '../components/carts/CartView.vue';

Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		component: ProductList,
	},
	{
		path: '/cate/:cateID',
		component: ProductList,
	},
	{
		path: '/products/:productId',
		component: ProductDetail,
		props: true,
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
		// path: "*",
		path: '/:catchAll(.*)',
		name: 'NotFound',
		redirect: '/',
		meta: {
			requiresAuth: false,
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});


export default router;
