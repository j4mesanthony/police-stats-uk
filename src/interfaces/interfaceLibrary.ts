import { Router, RouteRecord } from 'vue-router';

export interface Force {
    id: string;
    name: string;
}

export interface ForceDetail {
    description: string;
    engagement_methods: EngagementMethod[];
    id: string;
    name: string;
    telephone: string;
    url: string;
}

export interface StopSearch {
    age_range: string;
    datetime: string;
    gender: string;
    involved_person: boolean;
    legislation: string;
    location: Location;
    object_of_search: string;
    officer_defined_ethnicity: string;
    operation_name: null;
    operation: boolean;
    outcome_linked_to_object_of_search: null;
    outcome: boolean;
    removal_of_more_than_outer_clothing: boolean;
    self_defined_ethnicity: string;
    type: string;
}

export interface Location {
    latitude:  string;
    longitude: string;
    street:    Street;
}

export interface Street {
    id:   number;
    name: string;
}

export interface Store {
    allForces: Force[];
    forceDetails: ForceDetail[];
    selectedForceSeniorOfficers: Person[];
    stopSearches: any;
}

export interface EngagementMethod {
    description: string;
    title: string;
    url: string;
}

export interface Person {
    bio: string;
    name: string;
    rank: string;
}

export interface Route {
    name: string;
    path: string;
    isActive: boolean;
    children?: Array<Route>;
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