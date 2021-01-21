import {
    createApp
} from 'vue'
import {
    createStore
} from 'vuex'
import router from './router.js';
import App from './App.vue'
import './index.css'

const store = createStore({
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null
        }
    },
    actions: {
        login() {

        },
        async signup(context, payload) {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBB0fcsOhxDgWg8ZmTESXFHrUbuMVz4rys ', {
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

            console.log(responseData);
            context.commit('setUser', {
                token: responseData.idToken,
                userId: responseData.localId,
                tokenExpiration: responseData.expiresIn
            })
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

app.use(store)
app.use(router)
app.mount('#app')