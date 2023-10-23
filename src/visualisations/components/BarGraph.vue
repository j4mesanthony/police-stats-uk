<script setup lang="ts">
import { computed, watch } from 'vue';
import { useD3BarGraph } from '@/visualisations/composables/useD3BarGraph';
import { BarGraphOptions } from '@/interfaces/interfaceLibrary';

const props = defineProps({
    id: {
        type: String,
        required: true
    },

    data: {
        type: Array,
        required: true
    },

    barColor: {
        type: String,
        default: ''
    },

    barPadding: {
        type: Number,
        default: 0.6,
        validator: (value: number) => (value >= 0 && value <= 1)
    },

    barRadius: {
        type: Number,
        default: 10
    },

    duration: {
        type: Number,
        default: 800
    },
});

const { visualisation } = useD3BarGraph(props.id);

const options = computed<BarGraphOptions>(() => {
    return {
        bar_fill: props.barColor,
        bar_radius: props.barRadius,
        duration: props.duration,
        padding: props.barPadding
    }
});

watch(props.data, () => visualisation(props.data, options.value));
</script>

<template>
    <div :id="props.id"></div>
</template>