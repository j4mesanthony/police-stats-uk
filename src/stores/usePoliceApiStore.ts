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
        forceDetails: [],
        stopSearches: {}
    }),

    getters: {
        forcesCount(): number {
            return this.allForces.length || 0;
        },

        getForceNameById() {
            return (id: string) => 
                (this.allForces.find((x: Force) => x.id === id)?.name || 
                this.forceDetails.find((x: ForceDetail) => x.id === id)?.name) ||
                'Unknown';
        },

        getStopSearchesForId() {
            return (id: string): StopSearch[] => this.stopSearches[id];
        },
    },

    actions: {
        fetchForces() {
            return get('forces')
                .then((res: Array<Force>) => {
                    const models = res.map(x => new Force(x.id, x.name));
                    this.allForces.push(...models);
                });
        },

        fetchForceDetails(forceId: string): Promise<ForceDetail> {
            return get(`forces/${forceId}`)
                .then((res: ForceDetail) => {
                    this.forceDetails.push(res);
                });
        },

        fetchStopSearchesForId(forceId: string): Promise<StopSearch[]> {
            return get(`stops-force?force=${forceId}`)
                .then((res: StopSearch[]) => {
                    this.stopSearches[forceId] = res;
                });
        },

        fetchSeniorOfficers(force: string) {
            return get(`forces/${force}/people`)
                .then((res: Array<Person>) => {
                    this.selectedForceSeniorOfficers.push(...res);
                });
        },

        
    }
})