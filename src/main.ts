import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { RecycleScroller} from 'vue-virtual-scroller';
import './style.css';
import App from './App.vue';
import router from './router';

// TODO: Move to global index file
import DataSummaryPanel from './components/ui/DataSummaryPanel.vue';
import FlexPanelItem from './components/ui/FlexPanelItem.vue';
import IconButton from './components/ui/IconButton.vue';
import LinkItem from './components/ui/LinkItem.vue';
import Loader from './components/ui/Loader.vue';
import PopModal from './modules//modal/PopModal.vue';
import ScreenOverlay from './modules//modal/ScreenOverlay.vue';
import StickyHeading from './components/ui/StickyHeading.vue';

// TODO: Move to visualisations index file
import BarGraph from './visualisations/components/BarGraph.vue';

const pinia = createPinia();
const app = createApp(App);

app.component('BarGraph', BarGraph);
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
