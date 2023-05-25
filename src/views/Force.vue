<template>
    <div>
    <h2 class="mb-6 text-3xl font-bold text-slate-50">{{ name }}</h2>
    
    <div v-if="name" class="flex flex-row flex-wrap w-full gap-2">
        <FlexPanelItem class="grow basis-80">
            <p class="mb-1 text-4xl font-bold">{{ stopSearchTotal }}</p>
            <p>Total Stop Searches</p>
        </FlexPanelItem>

        <FlexPanelItem class="grow basis-80">
            <p class="mb-1 text-4xl font-bold">{{ juvenileTotal }}</p>
            <p>{{ JUVENILE }}</p>
        </FlexPanelItem>

        <FlexPanelItem class="grow basis-80">
            <p class="mb-1 text-4xl font-bold">{{ youngAdultTotal }}</p>
            <p>{{ YOUNG_ADULT }}</p>
        </FlexPanelItem>

        <FlexPanelItem class="grow basis-80">
            <p class="mb-1 text-4xl font-bold">{{ adultTotal }}</p>
            <p>{{ ADULT }}</p>
        </FlexPanelItem>

        <FlexPanelItem class="grow basis-80">
            <p class="mb-1 text-4xl font-bold">{{ matureTotal }}</p>
            <p>{{ MATURE }}</p>
        </FlexPanelItem>

        <FlexPanelItem class="grow basis-80">
            <p class="mb-1 text-4xl font-bold">{{ maleTotal }}</p>
            <p>Male</p>
        </FlexPanelItem>

        <!-- TODO: New component for these summaries (DataSummary.vue?) -->
        <FlexPanelItem class="grow basis-80">
            <p class="mb-1 text-4xl font-bold">{{ femaleTotal }}</p>
            <p>Female</p>
        </FlexPanelItem>
    </div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { StopSearch } from '../interfaces/interfaceLibrary';
import { NumberOrString } from '../types/typeLibrary';
import { JUVENILE, YOUNG_ADULT, ADULT, MATURE } from '../constants/ageRanges';
import { MALE, FEMALE } from '../constants/genders';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';

const { 
    getStopSearchesForId,
    getStopSearchTotalsForGender,
    getStopSearchTotalsForAgeRange,
    getForceNameById,
    forceDetails,
    fetchStopSearchesForId,
    fetchForceDetails,
} = usePoliceApiStore();

const props = defineProps<{
    id: string
}>();

const name = computed<string>(() => (getForceNameById(props.id)));
const stopSearches = computed<StopSearch[]>(() => getStopSearchesForId(props.id));

const stopSearchTotal = computed<NumberOrString>(() => {
    const data: StopSearch[] = stopSearches.value;
    return data?.length ? data.length : '-';
});

// TODO: Refactor computeds below to remove repetition
// TODO: New composable to format numbers
// TODO: New composable to filter an array by key

const juvenileTotal = computed<NumberOrString>(() => {
    return getTotalsForAgeRangeMetric(JUVENILE);
});

const youngAdultTotal = computed<NumberOrString>(() => {
    return getTotalsForAgeRangeMetric(YOUNG_ADULT);
});

const adultTotal = computed<NumberOrString>(() => {
    return getTotalsForAgeRangeMetric(ADULT);
});

const matureTotal = computed<NumberOrString>(() => {
    return getTotalsForAgeRangeMetric(MATURE);
});

function getTotalsForAgeRangeMetric(rangeType: string): NumberOrString {
    const data: number = getStopSearchTotalsForAgeRange(props.id, rangeType);
    return data ? data : '-';
}

const maleTotal = computed<NumberOrString>(() => {
    return getTotalsForGenderMetric(MALE);
});

const femaleTotal = computed<NumberOrString>(() => {
    return getTotalsForGenderMetric(FEMALE);
});

function getTotalsForGenderMetric(gender: string): NumberOrString {
    const data: number = getStopSearchTotalsForGender(props.id, gender);
    return data ? data : '-';
}

// TODO: Implement this instead of the above getTotals functions
// function getTotalsForMetric(metricType: string, metricParam: string): NumberOrString {
//     const data: number = metricType === 'gender' ? getStopSearchTotalsForGender(props.id, metricParam) : getStopSearchTotalsForAgeRange(props.id, metricParam);
//     return data ? data : '-';
// }

const isCached = !!forceDetails.find(x => x.id === props.id);
if (!isCached) {
    fetchForceDetails(props.id);
    fetchStopSearchesForId(props.id);
};

</script>