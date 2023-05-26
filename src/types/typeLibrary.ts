import { ForceDetail, Person } from "../interfaces/interfaceLibrary";
import { Force } from '../models/force';
import { AGE, GENDER, REASON} from '../constants/stopSearchMetrics';

// TODO: This is should be an interface
export type Store = {
    allForces: Force[],
    selectedForceSeniorOfficers: Person[],
    forceDetails: ForceDetail[],
    stopSearches: any
}

export type NumberOrString = number | string;

// Use the metric constants here
export type StopSearchMetric = typeof AGE | typeof GENDER | typeof REASON;
