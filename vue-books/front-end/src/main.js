import { createApp, use } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

const app = createApp(App).use(store).use(VueAxios, axios)
app.mount('#app')