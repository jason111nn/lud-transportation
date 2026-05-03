import { createApp } from 'vue'
import '@fontsource/noto-sans-tc/chinese-traditional-300.css'
import '@fontsource/noto-sans-tc/chinese-traditional-400.css'
import '@fontsource/noto-sans-tc/chinese-traditional-500.css'
import '@fontsource/noto-sans-tc/chinese-traditional-600.css'
import '@fontsource/noto-sans-tc/chinese-traditional-700.css'
import '@fontsource/noto-sans-tc/chinese-traditional-900.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

console.log(
  "%c LUD System %c v1.0.0 %c",
  "background:#4A677D; padding: 1px; border-radius: 3px 0 0 3px; color: #fff",
  "background:#111827; padding: 1px; border-radius: 0 3px 3px 0; color: #fff",
  "background:transparent"
);
console.log("歡迎交流技術：jason5j288@gmail.com");
