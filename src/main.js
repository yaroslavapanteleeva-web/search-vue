import { createApp } from 'vue';

import App from './App.vue';
import './assets/scss/index.scss';

import store from './store/index.js';

import BaseCard from './components/base/BaseCard.vue';

const app = createApp(App);

app.use(store);

app.component('base-card', BaseCard);

app.mount('#app');
