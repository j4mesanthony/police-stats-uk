import { ForceDetail, Person, StopSearch } from "../interfaces/interfaceLibrary";
import { Force } from '../models/force';

// TODO: This is should be an interface
export type Store = {
    allForces: Force[],
    selectedForceSeniorOfficers: Person[],
    forceDetails: ForceDetail[],
    stopSearches: any
}

export type NumberOrString = number | string;