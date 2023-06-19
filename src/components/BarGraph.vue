<script setup lang="ts">
import { watch } from 'vue';
import { useD3BarGraph } from '../visualisations/composables/useD3BarGraph';

const props = defineProps({
    data: {
        type: Array,
        required: true
    },
});

const { visualisation } = useD3BarGraph('graph');
watch(props.data, () => visualisation(props.data));
</script>

<template>
    <div id="graph"></div>
</template>