<script setup lang="ts">
import { computed } from 'vue';
import { useNav } from '../global/composables/useNav';
import { useNumberFormatter } from '../global/composables/useNumberFormatter';
import IconButton from './IconButton.vue';

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
    <FlexPanelItem class="relative flex cursor-pointer basis-80" @click="onClick(props.path)">
        <IconButton icon="expand_content" class="absolute top-[7px] right-[7px]" />

        <p class="clear-both mb-1 text-4xl font-bold">
            <template v-if="hasPath">
                <LinkItem :underline="false">{{ formattedData }}</LinkItem>
            </template>
            <template v-else>
                {{ formattedData }}
            </template>
            <span class="block mt-1 text-base font-normal">{{ props.label }}</span>
        </p>
    </FlexPanelItem>
</template>