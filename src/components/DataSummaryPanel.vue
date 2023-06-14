<script setup lang="ts">
import { computed } from 'vue';
import { useNav } from '../composables/useNav';
import { useNumberFormatter } from '../composables/useNumberFormatter';

const { goTo } = useNav();
const { formatNumber } = useNumberFormatter();

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

const hasPath = computed(() => !!props.path);
const formattedData = computed(() => formatNumber(props.data));
</script>

<template>
    <FlexPanelItem class="cursor-pointer grow basis-80" @click="goTo(props.path)">
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