import {
    createApp
} from 'vue'


import router from './router.js';
import App from './App.vue';
import './index.css';
import BaseSpinner from './components/UI/BaseSpinner.vue';
import ErrorDialog from './components/UI/ErrorDialog';
import store from './store.js';
import VueCookies from 'vue3-cookies'



const app = createApp(App)


app.component('base-spinner', BaseSpinner)
app.component('error-dialog', ErrorDialog)
app.use(VueCookies)
app.use(store)
app.use(router)
app.mount('#app')