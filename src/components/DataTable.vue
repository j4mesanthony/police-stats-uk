<script setup lang="ts">
import { useWindowSize } from '../composables/useWindowSize';

const emits = defineEmits(['click']);

const props = defineProps({
    data: {
        type: Object,
        required: true
    },

    key: {
        type: String,
        default: 'id'
    },

    itemSize: {
        type: [Number, String],
        default: 1
    },

    isRowsClickable: {
        type: Boolean,
        default: false
    },
});

const { isMobile } = useWindowSize();
</script>

<template>
    <RecycleScroller
        :key="data.length"
        :items="props.data"
        :item-size="props.itemSize"
        :key-field="props.key"
        v-slot="{ item }">
        
        <div :class="{ 'hover:text-slate-50 hover:border-slate-50 origin-bottom': !isMobile, 'hover:scale-[1.02]' : !isMobile && props.isRowsClickable }" 
              class="p-4 pl-3 pr-3 text-sm text-left transition-all duration-200 border-b cursor-pointer dark:border-slate-700 dark:text-slate-400"
             @click="emits('click', item)">
            {{ item.name }}
        </div>
    </RecycleScroller>
</template>