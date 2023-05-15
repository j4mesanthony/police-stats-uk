import { defineStore } from 'pinia';
import { useFetch } from '../composables/useFetch';
import { Store } from '../types/typeLibrary';
import { Force, Person } from '../interfaces/interfaceLibrary';

const { get } = useFetch();

export const usePoliceApiStore = defineStore('policeApi', {
    state: (): Store => ({
        allForces: [],
        selectedForceSeniorOfficers: [],
    }),

    getters: {
        forcesCount(): number {
            return this.allForces.length || 0;
        }
    },

    actions: {
        getForces() {
            return get('forces')
                .then((res: Array<Force>) => {
                    this.allForces.push(...res);
                });
        },

        getSeniorOfficers(force: string) {
            return get(`forces/${force}/people`)
                .then((res: Array<Person>) => {
                    this.selectedForceSeniorOfficers.push(...res);
                });
        },
    }
})