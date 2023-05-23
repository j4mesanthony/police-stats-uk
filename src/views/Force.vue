<template>
    <div>
    <h2 class="mb-6 text-3xl font-bold text-slate-50">{{ name }}</h2>
    <p class="mb-5 text-slate-50"><b>Total Stop Searches:</b> {{ stopSearches?.length }}</p>
</div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';

const store = usePoliceApiStore();

const props = defineProps<{
    id: string
}>();

const name = computed(() => (store.getForceNameById(props.id) || store.selectedForceDetails?.name));
const stopSearches = computed(() => store.getStopSearchesForId(props.id));

// TODO: Refactor here and in store to add multiple force details to cache and load from there first if available.
const storedId = store.selectedForceDetails?.id;
const isCached = storedId === props.id;

if (!isCached) {
    store.clearForceDetails();
    store.fetchForceDetails(props.id);
    store.fetchStopSearchesForId(props.id);
};

</script>