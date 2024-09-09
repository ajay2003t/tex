import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import car from './components/car.vue'

const app = createApp(App)

app.use(router)
app.component("car",car)
app.mount('#app')
