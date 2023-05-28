<script setup lang="ts">
import { computed } from 'vue';
import { useNav } from '../composables/useNav';
const { goTo } = useNav();

const props = defineProps({
    data: {
        type: [Number, String],
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
</script>

<template>
    <FlexPanelItem class="grow basis-80">
        <p class="mb-1 text-4xl font-bold">
            <template v-if="hasPath">
                <LinkItem @click="goTo(props.path)" :underline="false">{{ props.data }}</LinkItem>
            </template>
            <template v-else>
                {{ props.data }}
            </template>
        </p>
        <p>{{ props.label }}</p>
    </FlexPanelItem>
</template>