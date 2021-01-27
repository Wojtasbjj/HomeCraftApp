let timer;

import {
    createApp
} from 'vue'
import {
    createStore
} from 'vuex'
import router from './router.js';
import App from './App.vue'
import './index.css'
import BaseSpinner from './components/UI/BaseSpinner.vue'

const store = createStore({
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null,
            AuthMode: 'login',
        }
    },
    actions: {
        async login(context, payload) {
            return context.dispatch('auth', {
                ...payload,
                mode: 'signup'
            })
        },
        async signup(context, payload) {
            return context.dispatch('auth', {
                ...payload,
                mode: 'signup'
            })
        },
        logout(context) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('tokenExpiration');

            clearTimeout(timer);

            context.commit('setUser', {
                token: null,
                userId: null,
            })
        },
        async auth(context, payload) {
            const mode = payload.mode
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBB0fcsOhxDgWg8ZmTESXFHrUbuMVz4rys'

            if (mode === 'signup') {
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBB0fcsOhxDgWg8ZmTESXFHrUbuMVz4rys'
            }
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    userName: payload.userName,
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            });

            const responseData = await response.json();

            if (!response.ok) {
                console.log(responseData)
                const error = new Error(responseData.message || 'Fail to authenticate');
                throw error;
            }

            const expiresIn = +responseData.expiresIn * 1000;
            const expirationDate = new Date().getTime() + expiresIn;


            localStorage.setItem('token', responseData.idToken);
            localStorage.setItem('userId', responseData.localId);
            localStorage.setItem('tokenExpiration', expirationDate);

            timer = setTimeout(function () {
                context.dispatch('logout')
            }, expiresIn);

            context.commit('setUser', {
                token: responseData.idToken,
                userId: responseData.localId,
            });
        },
        autoLogin(context) {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const tokenExpiration = localStorage.getItem('tokenExpiration');


            const expiresIn = +tokenExpiration - new Date().getTime();

            if (expiresIn < 0) {
                return;
            }

            timer = setTimeout(function () {
                context.dispatch('logout')
            }, expiresIn)

            if (token && userId) {
                context.commit('setUser', {
                    token: token,
                    userId: userId,
                })
            }
        },
    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(state) {
            return !!state.token;
        }
    },
    mutations: {
        setUser(state, payload) {
            state.token = payload.token;
            state.userId = payload.userId;
        },
        setLoginMode(state) {
            state.AuthMode = 'signin'
        }
    }
})

const app = createApp(App)

app.component(BaseSpinner)
app.use(store)
app.use(router)
app.mount('#app')