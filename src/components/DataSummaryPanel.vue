<script setup lang="ts">
import { computed } from 'vue';
import { useNav } from '../global/composables/useNav';
import { useNumberFormatter } from '../global/composables/useNumberFormatter';

const emits = defineEmits(['click']);

const props = defineProps({
    data: {
        type: Number,
        required: true
    },

    label: {
        type: String,
        required: true
    },

    path: {
        type: String,
        default: null
    }
});

const { goTo } = useNav();
const { formatNumber } = useNumberFormatter();
const hasPath = computed(() => !!props.path);
const formattedData = computed(() => formatNumber(props.data));

function onClick(path: string) {
    if (path) {
        goTo(path);
        return;
    }

    emits('click')
}
</script>

<template>
    <FlexPanelItem class="cursor-pointer grow basis-80" @click="onClick(props.path)">
        <p class="mb-1 text-4xl font-bold">
            <template v-if="hasPath">
                <LinkItem :underline="false">{{ formattedData }}</LinkItem>
            </template>
            <template v-else>
                {{ formattedData }}
            </template>
        </p>
        <p>{{ props.label }}</p>
    </FlexPanelItem>
</template>