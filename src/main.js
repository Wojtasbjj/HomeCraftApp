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
        }
    },
    actions: {
        async login(context, payload) {
            return context.dispatch('auth', {
                ...payload,
                mode: 'login'
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

            context.commit('setUser', {
                token: null,
                userId: null,
                tokenExpiration: null
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

            const expiresIn = responseData.expiresIn * 1000
            const expirationDate = new Date().getTime() +

                localStorage.setItem('token', responseData.idToken);
            localStorage.setItem('userId', responseData.localId);

            context.commit('setUser', {
                token: responseData.idToken,
                userId: responseData.localId,
                tokenExpiration: responseData.expiresIn
            });
        },
        autoLogin(context) {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');

            if (token && userId) {
                context.commit('setUser', {
                    token: token,
                    userId: userId,
                    tokenExpiration: null
                })
            }
        }
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
            state.tokenExpiration = payload.tokenExpiration;
        }
    }
})

const app = createApp(App)

app.component(BaseSpinner)
app.use(store)
app.use(router)
app.mount('#app')