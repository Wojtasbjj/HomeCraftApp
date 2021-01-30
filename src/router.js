import {
    createRouter,
    createWebHistory
} from 'vue-router';

import UserAuth from './components/pages/auth/UserAuth.vue';
import WelcomePage from './components/pages/WelcomePage.vue';
import UserPanel from './components/pages/UserPanel/UserPanel.vue';
import UserLogin from './components/pages/auth/UserLogin.vue';
import UserRegister from './components/pages/auth/UserRegister.vue';
import TheAlkohols from './components/pages/UserPanel/TheAlkohols.vue';
import TheCannabis from './components/pages/UserPanel/TheCannabis.vue';
import TheHoney from './components/pages/UserPanel/TheHoney.vue';
import TheMeat from './components/pages/UserPanel/TheMeat.vue';
import TheBeer from "./components/pages/UserPanel/TheBeer.vue";
import TheWine from "./components/pages/UserPanel/TheWine.vue";
import TheDestilat from "./components/pages/UserPanel/TheDestilat.vue";

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
                    children: [{
                            path: 'beer',
                            component: TheBeer
                        },
                        {
                            path: 'wine',
                            component: TheWine
                        },
                        {
                            path: 'destilat',
                            component: TheDestilat
                        }
                    ]
                },
                {
                    path: 'cannabis',
                    component: TheCannabis,
                },
                {
                    path: 'honey',
                    component: TheHoney,
                },
                {
                    path: 'meat',
                    component: TheMeat,
                },
            ],
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