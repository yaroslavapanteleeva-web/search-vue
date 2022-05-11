import { createApp } from 'vue';

import App from './App.vue';
import './assets/scss/index.scss';

import BaseCard from './components/base/BaseCard.vue';

const app = createApp(App);

app.component('base-card', BaseCard);

app.mount('#app');
