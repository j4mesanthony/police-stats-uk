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
    <FlexPanelItem class="relative flex cursor-pointer basis-80" @click="onClick(props.path)">
        <!-- TODO: IconButton -->
        <div class="p-2 absolute top-[7px] right-[7px] rounded-md h-[38px] hover:shadow-md box-border text-center hover:border-cyan-500 border-[1px] border-slate-900 cursor-pointer duration-100 bg-slate-950 w-fit group">
            <span class="material-symbols-outlined relative text-[20px] transition-transform  text-slate-400 group-hover:text-cyan-500 group-hover:animate-pulse group-hover:scale-[1.3]">expand_content</span>
        </div>

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