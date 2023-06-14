<script setup lang="ts">
import { computed } from 'vue';
import { StopSearch } from '../interfaces/interfaceLibrary';
import { StopSearchMetric } from '../types/typeLibrary';
import { JUVENILE, YOUNG_ADULT, ADULT, MATURE } from '../constants/ages';
import { MALE, FEMALE } from '../constants/genders';
import { AGE, GENDER } from '../constants/stopSearchMetrics';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import DataSummaryPanel from '../components/DataSummaryPanel.vue';

const { 
    fetchForceDetails,
    forceDetails,
    getForceNameById,
    getStopSearchesForId,
    getStopSearchTotalsForMetric,
} = usePoliceApiStore();

const props = defineProps<{
    id: string
}>();

const name = computed<string>(() => (getForceNameById(props.id)));
const stopSearches = computed<StopSearch[]>(() => getStopSearchesForId(props.id));

const stopSearchTotal = computed<number>(() => {
    const data: StopSearch[] = stopSearches.value;
    return data?.length ? data.length : 0;
});

const juvenileTotal = computed<number>(() => getTotalsOutputForMetric(AGE, JUVENILE));
const youngAdultTotal = computed<number>(() => getTotalsOutputForMetric(AGE, YOUNG_ADULT));
const adultTotal = computed<number>(() => getTotalsOutputForMetric(AGE, ADULT));
const matureTotal = computed<number>(() => getTotalsOutputForMetric(AGE, MATURE));
const maleTotal = computed<number>(() => getTotalsOutputForMetric(GENDER, MALE));
const femaleTotal = computed<number>(() => getTotalsOutputForMetric(GENDER, FEMALE));

function getTotalsOutputForMetric(metricType: StopSearchMetric, metricParam: string): number {
    const data: number = getStopSearchTotalsForMetric(props.id, metricType, metricParam);
    return data ? data : 0;
}

// TODO: Refactor in store to getOrFetch data
const isCached = !!forceDetails.find(x => x.id === props.id);
if (!isCached) {
    fetchForceDetails(props.id);
};
</script>

<template>
    <div>
        <StickyHeading>{{ name}}</StickyHeading>
    
        <div v-if="name" class="flex flex-row flex-wrap w-full gap-2">
            <DataSummaryPanel label="Total Stop Searches" :data="stopSearchTotal" />
            <DataSummaryPanel :label="JUVENILE" :data="juvenileTotal" />
            <DataSummaryPanel :label="YOUNG_ADULT" :data="youngAdultTotal" />
            <DataSummaryPanel :label="ADULT" :data="adultTotal" />
            <DataSummaryPanel :label="MATURE" :data="matureTotal" />
            <DataSummaryPanel :label="MALE" :data="maleTotal" />
            <DataSummaryPanel :label="FEMALE" :data="femaleTotal" />
        </div>
    </div>
</template>