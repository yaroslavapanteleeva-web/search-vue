import { createRouter, createWebHistory } from 'vue-router';

import SearchPage from './pages/SearchPage.vue';
import ManProfile from './pages/ManProfile.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            component: SearchPage
        },
        {
            path: '/:id',
            component: ManProfile,
            props: true
        },
        // { path: '/:notFound(.*)', component: NotFound }
    ]

})

export default router;