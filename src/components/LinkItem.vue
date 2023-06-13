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
    },

    icon: {
        type: String,
        default: ''
    },
});
</script>

<template>
    <a class="cursor-pointer text-slate-800 dark:hover:text-slate-300" :class="[ props.isActive ? 'dark:text-cyan-400' : 'dark:text-slate-400', props.small ? 'text-sm':'', props.large ? 'text-lg':'', props.underline ? 'underline':'' ]">
        <!-- TODO: set icon font size via prop -->
        <span class="relative material-symbols-outlined top-[4px] mr-1" style="font-size: 18px;">{{ props.icon }}</span><slot></slot>
    </a>
</template>