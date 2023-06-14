<script setup lang="ts">
import { useWindowSize } from '../composables/useWindowSize';
const { isMobile } = useWindowSize();
</script>

<template>
    <div :class="{ 'hover:scale-[1.02]': !isMobile }" 
          class="items-center justify-center flex-grow p-5 text-sm text-center transition-transform rounded-md shadow-md select-none min-h-100 bg-slate-100 dark:bg-slate-800 dark:text-slate-300">
        <slot></slot>
    </div>
</template>