import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductList from '../components/products/ProductList.vue';
import ProductDetail from '../components/products/ProductDetail.vue';
import CartView from '../components/carts/CartView.vue';
import LalaPartVue from '../components/LalaPart.vue';
import bulbPartVue from '../components/bulbPart.vue';

Vue.use(VueRouter);
const routes = [
	{
		path: '/bulbs',
		component: bulbPartVue,
		props: true,
	},
	{
		path: '/balls',
		component: LalaPartVue,
		props: true,
	},
	{
		path: '/cate/:cateID',
		component: ProductList,
		name: 'category',
		props: true,
	},
	{
		path: '/products/:productId',
		component: ProductDetail,
		props: true,
	},
	{
		path: '/cart',
		name: 'cart',
		component: CartView,
	},
	{
		path: '/login',
		component: CartView,
	},
	{
		path: '/',
		component: ProductList,
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
