import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/ProductList.vue';
import ProductDetail from '../components/ProductDetail.vue';
import CartView from '../components/CartView.vue';


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: ProductList,
			redirect: '/products',
		},
		{
			path: '/products',
			component: ProductList,
			// children: [
			// 	// { path: '/products/:teamId', component: ProductDetail, props: true },
			// 	{ path: ':productId', component: ProductDetail, props: true },
			// ],
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

// const routes = [
// 	{
// 		path: '/products',
// 		component: ProductList,
// 		children: [
// 			{ path: ':productId', component: ProductDetail, props: true }
// 		],
// 	},
// 	{
// 		path: '/cart',
// 		// name: 'cart',
// 		component: CartView,
// 	},
// 	{
// 		path: '/about',
// 		name: 'about',
// 		// route level code-splitting
// 		// this generates a separate chunk (about.[hash].js) for this route
// 		// which is lazy-loaded when the route is visited.
// 		component: () =>
// 			import(/* webpackChunkName: "about" */ '../components/AboutView.vue'),
// 	},
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

export default router;
