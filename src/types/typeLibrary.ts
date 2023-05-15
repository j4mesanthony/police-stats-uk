import { Person } from "../interfaces/interfaceLibrary";
import { Force } from '../models/force';

export type Store = {
    allForces: Array<Force>,
    selectedForceSeniorOfficers: Array<Person>
}
