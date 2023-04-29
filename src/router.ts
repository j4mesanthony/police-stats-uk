import { createRouter, createWebHistory } from 'vue-router';

import ContentWrapper from './components/ContentWrapper.vue';
import HomeDashboard from './views/HomeDashboard.vue';
import SettingsArea from './views/SettingsArea.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', redirect: '/home' },
        {  path: '/', redirect: '/home' },

        {
            path: '/home',
            component: ContentWrapper,
            children: [
                {
                    path: '',
                    component: HomeDashboard
                },
                {
                    path: 'settings',
                    component: SettingsArea
                }
            ]
        }
    ]
});
