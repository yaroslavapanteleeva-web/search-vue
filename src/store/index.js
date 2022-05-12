import { createStore } from 'vuex';

import filterModule from './modules/filter.js'

const store = createStore({
    modules: {
        filter: filterModule,
    },
});

export default store;