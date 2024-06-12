import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.css'
import 'primeicons/primeicons.css'
const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
