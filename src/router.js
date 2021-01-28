import {
    createRouter,
    createWebHistory
} from 'vue-router';

import UserAuth from './components/pages/auth/UserAuth.vue'
import WelcomePage from './components/pages/WelcomePage.vue'
import UserPanel from './components/pages/UserPanel.vue'
import UserLogin from './components/pages/auth/UserLogin.vue'
import UserRegister from './components/pages/auth/UserRegister.vue'
import TheAlkohols from './components/pages/TheAlkohols.vue'

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
            children: [{
                path: 'alkohols',
                component: TheAlkohols,
            }],
        },
        {
            path: '/',
            redirect: '/welcome'
        },
        {
            path: '/user/login',
            component: UserLogin,
        },
        {
            path: '/user/register',
            component: UserRegister,
        },
    ]
});

export default router;