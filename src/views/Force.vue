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
import { NumberOrString, StopSearchMetric } from '../types/typeLibrary';
import { JUVENILE, YOUNG_ADULT, ADULT, MATURE } from '../constants/ageRanges';
import { MALE, FEMALE } from '../constants/genders';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';

const { 
    fetchForceDetails,
    fetchStopSearchesForId,
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

const stopSearchTotal = computed<NumberOrString>(() => {
    const data: StopSearch[] = stopSearches.value;
    return data?.length ? data.length : '-';
});

// TODO: New composable to format numbers
// TODO: Create constants file for metric types
const juvenileTotal = computed<NumberOrString>(() => {
    return getTotalsOutputForMetric('age_range', JUVENILE);
});

const youngAdultTotal = computed<NumberOrString>(() => {
    return getTotalsOutputForMetric('age_range', YOUNG_ADULT);
});

const adultTotal = computed<NumberOrString>(() => {
    return getTotalsOutputForMetric('age_range', ADULT);
});

const matureTotal = computed<NumberOrString>(() => {
    return getTotalsOutputForMetric('age_range', MATURE);
});

const maleTotal = computed<NumberOrString>(() => {
    return getTotalsOutputForMetric('gender', MALE);
});

const femaleTotal = computed<NumberOrString>(() => {
    return getTotalsOutputForMetric('gender', FEMALE);
});

function getTotalsOutputForMetric(metricType: StopSearchMetric, metricParam: string): NumberOrString {
    const data: number = getStopSearchTotalsForMetric(props.id, metricType, metricParam);
    return data ? data : '-';
}

const isCached = !!forceDetails.find(x => x.id === props.id);
if (!isCached) {
    fetchForceDetails(props.id);
    fetchStopSearchesForId(props.id);
};

</script>