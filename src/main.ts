import { createApp } from 'vue';
import { createPinia } from 'pinia'
import './style.css';
import App from './App.vue';
import router from './router';

// TODO: Move to global index file
import DataSummaryPanel from './components/DataSummaryPanel.vue';
import FlexPanelItem from './components/FlexPanelItem.vue';
import LinkItem from './components/LinkItem.vue';
import Loader from './components/Loader.vue';
import StickyHeading from './components/StickyHeading.vue';

const pinia = createPinia();
const app = createApp(App);

app.component('DataSummaryPanel', DataSummaryPanel);
app.component('FlexPanelItem', FlexPanelItem);
app.component('LinkItem', LinkItem);
app.component('Loader', Loader);
app.component('StickyHeading', StickyHeading);

app.use(pinia);
app.use(router);
app.mount('#app');
