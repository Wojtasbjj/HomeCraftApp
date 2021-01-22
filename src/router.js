import {
    createRouter,
    createWebHistory
} from 'vue-router';

import UserAuth from './components/pages/auth/UserAuth.vue'
import WelcomePage from './components/pages/WelcomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/auth',
            component: UserAuth
        },
        {
            path: '/welcome',
            component: WelcomePage
        },
        {
            path: '/',
            redirect: '/welcome'
        }
    ]
});

export default router;