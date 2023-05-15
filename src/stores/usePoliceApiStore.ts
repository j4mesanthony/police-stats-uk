import { defineStore } from 'pinia';
import { useFetch } from '../composables/useFetch';
import { Store } from '../types/typeLibrary';
import { Force } from '../interfaces/interfaceLibrary';

const { get } = useFetch();

export const usePoliceApiStore = defineStore('policeApi', {
    state: (): Store => ({
        allForces: [],
    }),

    getters: {
        forcesCount(): number {
            return this.allForces.length || 0;
        }
    },

    actions: {
        getForces() {
            get('forces')
                .then((res: Array<Force>) => {
                    this.allForces.push(...res);
                });
        }
    }
})