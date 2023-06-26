<script setup lang="ts">
import { computed, watch } from 'vue';
import { useD3BarGraph } from '../composables/useD3BarGraph';
import { BarGraphOptions } from '../../interfaces/interfaceLibrary';

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
const options = computed<BarGraphOptions>(() => {
    return {
        bar_fill: 'cyan',
        bar_radius: 10,
        duration: 5000,
        padding: 0.6
    }
});

watch(props.data, () => visualisation(props.data, options.value));
</script>

<template>
    <div :id="props.id"></div>
</template>