<script setup lang="ts">
import { computed } from 'vue';
import { useWindowSize } from '@/global/composables/useWindowSize';
import { useScrollPosition } from '@/global/composables/useScrollPosition'; 

const { isMobile } = useWindowSize();
const { yPos } = useScrollPosition();
const scrollThreshold = computed(() => isMobile.value ? 60 : 25);
</script>

<template>
    <h2 class="sticky top-0 z-50 mb-6 text-2xl font-bold text-slate-50" :class="{ 'top-[67px]': isMobile, 'backdrop-blur-md transition-all border-b-[1px] pt-5 pb-5 border-slate-600': yPos > scrollThreshold }">
        <slot>Heading</slot>
    </h2>
</template>