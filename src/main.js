import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'

// https://ithelp.ithome.com.tw/articles/10260013
import './index.scss';

const app = createApp(App);
// createApp(App).use(router).mount('#app')
app.use(router);
app.use(store);
app.mount('#app');

