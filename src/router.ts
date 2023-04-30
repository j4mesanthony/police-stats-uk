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
            name: 'home',
            path: '/home',
            component: ContentWrapper,
            meta: {
                isParent: true
            },
            children: [
                {
                    name: 'dashboard',
                    path: '',
                    component: HomeDashboard
                },
                {
                    name: 'settings',
                    path: 'settings',
                    component: SettingsArea
                },
            ]
        },

        {
            name: 'crime related',
            path: '/home',
            component: ContentWrapper,
            meta: {
                isParent: true
            },
            children: [
                {
                    name: 'street level',
                    path: '',
                    component: HomeDashboard
                },
                {
                    name: 'outcomes',
                    path: 'settings',
                    component: SettingsArea
                },
            ]
        }
    ]
});
