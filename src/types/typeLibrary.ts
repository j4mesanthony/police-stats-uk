import { Force, Person } from "../interfaces/interfaceLibrary";

export type Store = {
    allForces: Array<Force>,
    selectedForceSeniorOfficers: Array<Person>
}
