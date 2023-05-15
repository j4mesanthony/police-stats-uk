import { createRouter, createWebHistory } from 'vue-router';

const ContentWrapper = () => import('./components/ContentWrapper.vue');
const HomeDashboard = () => import('./views/HomeDashboard.vue');
const ForceList = () => import('./views/ForceList.vue');
const SettingsArea = () => import('./views/SettingsArea.vue');

export default createRouter({
    history: createWebHistory(),
    routes: [
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
            name: 'forces',
            path: '/forces',
            component: ContentWrapper,
            meta: {
                isParent: true
            },
            children: [
                {
                    name: 'active',
                    path: '',
                    component: ForceList
                },
            ]
        },
        
        { path: '/:pathMatch(.*)', redirect: '/home' }
    ]
});
