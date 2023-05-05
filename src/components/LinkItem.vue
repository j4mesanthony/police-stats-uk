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
    <a class="cursor-pointer text-slate-800 dark:text-slate-400 dark:hover:text-slate-300" :class="{ 'text-sm': small, 'text-lg': large, 'underline': underline, 'dark:text-cyan-400': isActive }">
        <slot>Anchor Text</slot>
    </a>
</template>