import { Router, RouteRecord } from 'vue-router';

export interface Route {
    name: string,
    path: string,
    isActive: boolean,
    children?: Array<Route>,
}

export interface UseNav {
    availableRoutes: Array<RouteRecord>
    goTo: (path: string) => void,
    router: Router
}