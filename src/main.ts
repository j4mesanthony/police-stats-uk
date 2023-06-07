import { createApp } from 'vue';
import { createPinia } from 'pinia'
import './style.css';
import App from './App.vue';
import router from './router';

// TODO: Move to global index file
import FlexPanelItem from './components/FlexPanelItem.vue';
import LinkItem from './components/LinkItem.vue';
import Loader from './components/Loader.vue';
import DataSummaryPanel from './components/DataSummaryPanel.vue';

const pinia = createPinia();
const app = createApp(App);

app.component('FlexPanelItem', FlexPanelItem);
app.component('LinkItem', LinkItem);
app.component('Loader', Loader);
app.component('DataSummaryPanel', DataSummaryPanel);

app.use(pinia);
app.use(router);
app.mount('#app');
