import { createRouter, createWebHistory } from 'vue-router';
import * as ROUTE_NAMES from './constants/routes';
import * as VIEWS from './views/index.views';

const ContentWrapper = () => import('./layouts/ContentWrapper.vue');

export default createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0 }
    },
    routes: [
        {
            name: ROUTE_NAMES.HOME,
            path: '/home',
            component: ContentWrapper,
            redirect: '/',
            meta: {
                isParent: true
            },
            children: [
                {
                    name: ROUTE_NAMES.DASHBOARD,
                    path: '',
                    component: VIEWS.HomeDashboard
                },
            ]
        },

        {
            name: ROUTE_NAMES.FORCES,
            path: '/forces',
            component: ContentWrapper,
            meta: {
                isParent: true
            },
            children: [
                {
                    name: ROUTE_NAMES.ACTIVE_FORCES,
                    path: '',
                    component: VIEWS.ForceList
                },
                {
                    name: ROUTE_NAMES.FORCE,
                    path: ':id',
                    component: VIEWS.Force,
                    props: true,
                    meta: {
                        hide: true
                    }
                },
            ]
        },
        
        { path: '/:pathMatch(.*)', redirect: '/home' }
    ]
});
