<script setup lang="ts">
const props = defineProps({
    small: {
        type: Boolean,
        default: false
    },

    large: {
        type: Boolean,
        default: false
    },

    underline: {
        type: Boolean,
        default: true
    },

    isActive: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <a class="cursor-pointer text-slate-800 dark:hover:text-slate-300" :class="[ isActive ? 'dark:text-cyan-400' : 'dark:text-slate-400', small ? 'text-sm':'', large ? 'text-lg':'', underline ? 'underline':'' ]">
        <slot>Anchor Text</slot>
    </a>
</template>