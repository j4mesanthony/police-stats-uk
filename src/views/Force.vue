<template>
    <div>
    <h2 class="mb-6 text-3xl font-bold text-slate-50">{{ name }}</h2>
    <p class="text-slate-50">{{ description }}</p>
</div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';

const store = usePoliceApiStore();

const props = defineProps<{
    id: string
}>();

const details = computed(() => store.selectedForceDetails);
const name = computed(() => details.value?.name);
const description = computed(() => {
    // TODO: Remove p tags from description data
    return details.value?.description;
});

onBeforeMount(() => {
    // TODO: Refactor here and in store to add multiple force details to cache and load from there first if available.
    const storedId = store.selectedForceDetails?.id;
    const isCached = storedId === props.id;
    if (!isCached) {
        store.clearForceDetails();
        store.getForceDetails(props.id);
    };
});
</script>