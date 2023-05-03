import { RouteRecord } from 'vue-router';

export interface Route {
    name: string,
    path: string,
    children?: Array<Route>,
}

export interface UseNav {
    availableRoutes: Array<RouteRecord>
    goTo: (path: string) => void,
}