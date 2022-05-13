import { createApp } from 'vue';

import router from './router';
import store from './store/index.js';

import App from './App.vue';
import './assets/scss/index.scss';

import BaseCard from './components/base/BaseCard.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);

app.mount('#app');
