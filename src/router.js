import {
    createRouter,
    createWebHistory
} from 'vue-router';

import UserAuth from './components/pages/auth/UserAuth.vue'
import WelcomePage from './components/pages/WelcomePage.vue'
import UserPanel from './components/pages/UserPanel.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/auth',
            component: UserAuth,
        },
        {
            path: '/welcome',
            component: WelcomePage,
        },
        {
            path: '/userpanel',
            component: UserPanel,
        },
        {
            path: '/',
            redirect: '/welcome'
        }
    ]
});

export default router;