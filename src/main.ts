import { createApp } from 'vue';
import markDownApp from './App.vue';
import installElementPlus from './plugins/element'

const app = createApp(markDownApp)
installElementPlus(app)
app.mount('#app');