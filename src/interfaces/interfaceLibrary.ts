import { Router, RouteRecord } from 'vue-router';

export interface Force {
    id: string;
    name: string;
}

export interface ForceDetail {
    description: string;
    url: string;
    engagement_methods: EngagementMethod[];
    telephone: string;
    id: string;
    name: string;
}

export interface EngagementMethod {
    url: string;
    description: string;
    title: string;
}

export interface Person {
    bio: string;
    name: string;
    rank: string;
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
    goTo: (path: string | { name: string, params: any }) => void,
    router: Router
}

export interface UseStringFormatter {
    toTitleCase: (input: string) => string
}