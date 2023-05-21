<template>
    <div>
    <h2 class="mb-6 text-3xl font-bold text-slate-50">{{ name }}</h2>
    <p class="text-slate-50">{{ description }}</p>
</div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount } from 'vue';
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

onMounted(() => {
    store.getForceDetails(props.id);
});

onBeforeUnmount(() => {
    console.warn('clear details...');
    store.clearForceDetails();
})
</script>