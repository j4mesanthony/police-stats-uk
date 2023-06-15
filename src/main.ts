import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { RecycleScroller} from 'vue-virtual-scroller';
import './style.css';
import App from './App.vue';
import router from './router';

// TODO: Move to global index file
import DataSummaryPanel from './components/DataSummaryPanel.vue';
import FlexPanelItem from './components/FlexPanelItem.vue';
import IconButton from './components/IconButton.vue';
import LinkItem from './components/LinkItem.vue';
import Loader from './components/Loader.vue';
import PopModal from './components/PopModal.vue';
import ScreenOverlay from './components/ScreenOverlay.vue';
import StickyHeading from './components/StickyHeading.vue';

const pinia = createPinia();
const app = createApp(App);

app.component('DataSummaryPanel', DataSummaryPanel);
app.component('FlexPanelItem', FlexPanelItem);
app.component('IconButton', IconButton);
app.component('LinkItem', LinkItem);
app.component('Loader', Loader);
app.component('PopModal', PopModal);
app.component('RecycleScroller', RecycleScroller);
app.component('ScreenOverlay', ScreenOverlay);
app.component('StickyHeading', StickyHeading);

app.use(pinia);
app.use(router);
app.mount('#app');
