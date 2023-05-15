import { Router, RouteRecord } from 'vue-router';

export interface Force {
    id: string;
    name: string;
}

export interface Route {
    name: string,
    path: string,
    isActive: boolean,
    children?: Array<Route>,
}

export interface UseFetch {
    get: (url: string) => any
}

export interface UseNav {
    availableRoutes: Array<RouteRecord>
    goTo: (path: string) => void,
    router: Router
}

export interface UseStringFormatter {
    toTitleCase: (input: string) => string
}