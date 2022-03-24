import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VuesticPlugin } from 'vuestic-ui';
import App from './App.vue';
import router from './router';
import 'vuestic-ui/dist/vuestic-ui.css';

const app = createApp(App);

app.use(createPinia());
app.use(VuesticPlugin);
app.use(router);
app.mount('#app');
