<script setup lang="ts">
import { computed } from 'vue';
import { useNav } from '../composables/useNav';
import { useNumbers } from '../composables/useNumbers';

const { goTo } = useNav();
const { formatNumber } = useNumbers();

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
    <FlexPanelItem class="grow basis-80">
        <p class="mb-1 text-4xl font-bold">
            <template v-if="hasPath">
                <LinkItem @click="goTo(props.path)" :underline="false">{{ formattedData }}</LinkItem>
            </template>
            <template v-else>
                {{ formattedData }}
            </template>
        </p>
        <p>{{ props.label }}</p>
    </FlexPanelItem>
</template>