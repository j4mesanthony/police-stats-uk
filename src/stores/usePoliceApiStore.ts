import { defineStore } from 'pinia';
import { useFetch } from '../composables/useFetch';
import { Store } from '../types/typeLibrary';
import { Person } from '../interfaces/interfaceLibrary';
import { Force } from '../models/force';

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
                    const models = res.map(x => new Force(x.id, x.name));
                    this.allForces.push(...models);
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