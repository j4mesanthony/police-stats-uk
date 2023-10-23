<script setup lang="ts">
import { computed } from 'vue';
import { useNav } from '@/composables/useNav';
import { useNumberFormatter } from '@/utils/useNumberFormatter';
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
const formattedData = computed(() => formatNumber(props.data));
const buttonIcon = computed(() => (props.path ? 'open_in_new' : 'fullscreen'));

function onClick() {
    if (props.path) {
        goTo(props.path);
        return;
    }

    emits('click');
}
</script>

<template>
    <FlexPanelItem class="relative flex basis-80">
        <IconButton :icon="buttonIcon" :showOutline="false" class="absolute top-[7px] right-[7px]"  @click="onClick" />

        <p class="clear-both mb-1 text-4xl font-bold">
            {{ formattedData }}
            <span class="block mt-1 text-base font-normal">{{ props.label }}</span>
        </p>
    </FlexPanelItem>
</template>