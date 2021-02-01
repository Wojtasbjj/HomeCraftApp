import {
    createApp
} from 'vue'


import router from './router.js';
import App from './App.vue'
import './index.css'
import BaseSpinner from './components/UI/BaseSpinner.vue'
import store from './store.js'


const app = createApp(App)

app.component(BaseSpinner)
app.use(store)
app.use(router)
app.mount('#app')