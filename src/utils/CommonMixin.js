import axios from 'axios';
// import json = require('@/assets/products.json');

import theJson from '@/assets/products.json';
import { shoes } from '@/assets/shoes.js';
// import shoesJson from '@/assets/shoes.json';
// import { mapActions, mapGetters, mapState } from 'vuex';

export default function () {
	let responseData = null;
	const getJsonData = async function (file) {
		try {
			responseData = await axios.get(file);
			let data = responseData.data;
			console.log('mixins data: ', data);
			return { data };
		} catch (error) {
			console.log(error);
		}
	};
	// let result = getJsonData('/shoes.js')
	// console.log('result: ', result);
	return { getJsonData, theJson, shoes };
	// return { getJsonData };
}
