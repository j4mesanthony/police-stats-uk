<template>
    <div>
    <h2 class="mb-6 text-3xl font-bold text-slate-50">{{ name }}</h2>
    <p v-if="name" class="mb-5 text-slate-50"><b>Total Stop Searches:</b> {{ stopSearches?.length }}</p>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';

const store = usePoliceApiStore();
const props = defineProps<{
    id: string
}>();

const name = computed(() => (store.getForceNameById(props.id)));
const stopSearches = computed(() => store.getStopSearchesForId(props.id));

const isCached = !!store.forceDetails.find(x => x.id === props.id);
if (!isCached) {
    store.fetchForceDetails(props.id);
    store.fetchStopSearchesForId(props.id);
};

</script>