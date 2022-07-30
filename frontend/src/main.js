import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'
createApp(App)
.component('fa', FontAwesomeIcon)
.use(store).use(router, axios)
.mount('#app')
