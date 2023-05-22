import { defineStore } from 'pinia';
import { useFetch } from '../composables/useFetch';
import { Store } from '../types/typeLibrary';
import { Person, ForceDetail, StopSearch } from '../interfaces/interfaceLibrary';
import { Force } from '../models/force';

const { get } = useFetch();

export const usePoliceApiStore = defineStore('policeApi', {
    state: (): Store => ({
        allForces: [],
        selectedForceSeniorOfficers: [],
        selectedForceDetails: null
    }),

    getters: {
        forcesCount(): number {
            return this.allForces.length || 0;
        }
    },

    actions: {
        getForces() {
            // TODO: Implement call to get stop searches per force id
            return get('forces')
                .then((res: Array<Force>) => {
                    const models = res.map(x => new Force(x.id, x.name));
                    this.allForces.push(...models);
                });
        },

        async getForceDetails(forceId: string): Promise<any> { // TODO: ForceDetailInclStopSearches interface
            const details: ForceDetail = await get(`forces/${forceId}`);
            const stopSearches: Array<StopSearch> = await get(`stops-force?force=${forceId}`);

            const data = {
                ...details,
                stopSearches
            }

            this.selectedForceDetails = data;
            
            return data;
        },

        clearForceDetails() {
            this.selectedForceDetails = null;
        },

        getSeniorOfficers(force: string) {
            return get(`forces/${force}/people`)
                .then((res: Array<Person>) => {
                    this.selectedForceSeniorOfficers.push(...res);
                });
        },
    }
})