import { createRouter, createWebHistory } from 'vue-router';

const ContentWrapper = () => import('./components/ContentWrapper.vue');
const HomeDashboard = () => import('./views/HomeDashboard.vue');
const SettingsArea = () => import('./views/SettingsArea.vue');

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
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
            path: '/',
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
