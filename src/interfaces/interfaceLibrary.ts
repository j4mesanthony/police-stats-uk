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

export interface StopSearch {
    age_range: string;
    self_defined_ethnicity: string;
    outcome_linked_to_object_of_search: null;
    datetime: string;
    removal_of_more_than_outer_clothing: boolean;
    operation: boolean;
    officer_defined_ethnicity: string;
    object_of_search: string;
    involved_person: boolean;
    gender: string;
    legislation: string;
    location: Location;
    outcome: boolean;
    type: string;
    operation_name: null;
}

export interface Location {
    latitude:  string;
    street:    Street;
    longitude: string;
}

export interface Street {
    id:   number;
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

export interface UseNumbers {
    formatLargeNumber: (input: number) => string
}

export interface UseStringFormatter {
    toTitleCase: (input: string) => string
}