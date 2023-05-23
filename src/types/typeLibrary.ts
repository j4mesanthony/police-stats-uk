import { ForceDetail, Person, StopSearch } from "../interfaces/interfaceLibrary";
import { Force } from '../models/force';

export type Store = {
    allForces: Force[],
    selectedForceSeniorOfficers: Person[],
    forceDetails: ForceDetail[],
    stopSearches: any
}
