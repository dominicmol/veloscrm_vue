// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// bepaal de API-base op basis van waar je app draait
const hostname = window.location.hostname
axios.defaults.baseURL = hostname === 'dominicmol.pythonanywhere.com'
  // op PythonAnywhere
  ? 'https://dominicmol.pythonanywhere.com/api/v1'
  // lokaal
  : 'http://127.0.0.1:8000/api/v1'

// App initialiseren
const app = createApp(App)

app.use(store)
app.use(router)

// Mounten
app.mount('#app')
