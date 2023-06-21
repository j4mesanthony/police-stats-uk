<script setup lang="ts">
import { computed } from 'vue';
import { StopSearch } from '../interfaces/interfaceLibrary';
import { StopSearchMetric } from '../types/typeLibrary';
import { JUVENILE, YOUNG_ADULT, ADULT, MATURE } from '../constants/ages';
import { MALE, FEMALE } from '../constants/genders';
import { AGE, GENDER } from '../constants/stopSearchMetrics';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import DataSummaryPanel from '../components/DataSummaryPanel.vue';

const props = defineProps<{
    id: string
}>();

const { 
    getOrfetchForceDetails,
    getForceNameById,
    getStopSearchesForId,
    getStopSearchTotalsForMetric,
} = usePoliceApiStore();

getOrfetchForceDetails(props.id);

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
</script>

<template>
    <div>
        <StickyHeading>{{ name}}</StickyHeading>
    
        <div v-if="name" class="flex flex-row flex-wrap w-full gap-5">
            <DataSummaryPanel label="Total Stop Searches" :data="stopSearchTotal" :class="{ 'animate-pulse' : !stopSearchTotal }" />
            <DataSummaryPanel :label="JUVENILE" :data="juvenileTotal" :class="{ 'animate-pulse' : !juvenileTotal }" />
            <DataSummaryPanel :label="YOUNG_ADULT" :data="youngAdultTotal" :class="{ 'animate-pulse' : !youngAdultTotal }" />
            <DataSummaryPanel :label="ADULT" :data="adultTotal" :class="{ 'animate-pulse' : !adultTotal }" />
            <DataSummaryPanel :label="MATURE" :data="matureTotal" :class="{ 'animate-pulse' : !matureTotal }" />
            <DataSummaryPanel :label="MALE" :data="maleTotal" :class="{ 'animate-pulse' : !maleTotal }" />
            <DataSummaryPanel :label="FEMALE" :data="femaleTotal" :class="{ 'animate-pulse' : !femaleTotal }" />
        </div>
    </div>
</template>