import { defineStore } from 'pinia';
import { useFetch } from '../global/composables/useFetch';
import { StopSearchMetric } from '../types/typeLibrary';
import { Person, ForceDetail, StopSearch, Store } from '../interfaces/interfaceLibrary';
import { Force } from '../models/force';

const { get } = useFetch();

export const usePoliceApiStore = defineStore('policeApi', {
    state: (): Store => ({
        allForces: [],
        forceDetails: [],
        isLoading: false,
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

        getStopSearchTotalsForMetric() {
            return (id: string, metric: StopSearchMetric, metricValue: string): number => 
            (this.stopSearches[id]?.filter((x: StopSearch) => x[metric as keyof StopSearch] === metricValue).length);
        },
    },

    actions: {
        getOrFetchForces() {
            const stored: Array<Force> = this.allForces;
            if (stored.length) return stored;

            this.isLoading = true;
            
            return get('forces')
                .then((res: Array<Force>) => {
                    const models = res.map(x => new Force(x.id, x.name));
                    this.allForces.push(...models);
                })
                .finally(() => this.isLoading = false);
        },

        getOrfetchForceDetails(forceId: string): Promise<ForceDetail> | any {
            const stored: ForceDetail | undefined = this.forceDetails.find(x => x.id == forceId);
            if (stored) return stored;

            this.isLoading = true;

            return get(`forces/${forceId}`)
                .then((res: ForceDetail) => {
                    this.forceDetails.push(res);
                    this.fetchStopSearchesForId(forceId);
                })
        },

        fetchStopSearchesForId(forceId: string): Promise<StopSearch[]> {
            return get(`stops-force?force=${forceId}`)
                .then((res: StopSearch[]) => {
                    this.stopSearches[forceId] = res;
                })
                .finally(() => this.isLoading = false);
        },
        
    }
})