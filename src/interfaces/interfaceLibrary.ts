import type { Ref } from 'vue';
import { Router, RouteRecord } from 'vue-router';
import { ArrayOrNull, StringOrNull } from '../types/typeLibrary';

export interface Route {
    name: string,
    path: string,
    isActive: boolean,
    children?: Array<Route>,
}

export interface UseFetch {
    data: Ref<ArrayOrNull>,
    error: Ref<StringOrNull>
}

export interface UseNav {
    availableRoutes: Array<RouteRecord>
    goTo: (path: string) => void,
    router: Router
}

export interface UseStringFormatter {
    toTitleCase: (input: string) => string
}