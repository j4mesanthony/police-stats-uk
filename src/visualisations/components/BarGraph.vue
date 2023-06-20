<script setup lang="ts">
import { watch } from 'vue';
import { useD3BarGraph } from '../composables/useD3BarGraph';

const props = defineProps({
    id: {
        type: String,
        required: true
    },

    data: {
        type: Array,
        required: true
    },
});

const { visualisation } = useD3BarGraph(props.id);
watch(props.data, () => visualisation(props.data));
</script>

<template>
    <div :id="props.id"></div>
</template>