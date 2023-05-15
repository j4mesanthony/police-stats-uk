import { createRouter, createWebHistory } from 'vue-router';
import * as ROUTENAMES from './constants/routes';

const ContentWrapper = () => import('./components/ContentWrapper.vue');
const HomeDashboard = () => import('./views/HomeDashboard.vue');
const ForceList = () => import('./views/ForceList.vue');
const SettingsArea = () => import('./views/SettingsArea.vue');

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: ROUTENAMES.HOME,
            path: '/home',
            component: ContentWrapper,
            meta: {
                isParent: true
            },
            children: [
                {
                    name: ROUTENAMES.DASHBOARD,
                    path: '',
                    component: HomeDashboard
                },
                {
                    name: ROUTENAMES.SETTINGS,
                    path: 'settings',
                    component: SettingsArea
                },
            ]
        },

        {
            name: ROUTENAMES.FORCES,
            path: '/forces',
            component: ContentWrapper,
            meta: {
                isParent: true
            },
            children: [
                {
                    name: ROUTENAMES.ACTIVE_FORCES,
                    path: '',
                    component: ForceList
                },
            ]
        },
        
        { path: '/:pathMatch(.*)', redirect: '/home' }
    ]
});
