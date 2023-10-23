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

    iconSize: {
        type: String,
        default: ''
    },
});
</script>

<template>
    <a class="cursor-pointer text-slate-300 hover:text-slate-300" :class="[ props.isActive ? 'text-cyan-400' : 'text-slate-400', props.small ? 'text-sm':'', props.large ? 'text-lg':'', props.underline ? 'underline':'' ]">
        <span class="relative material-symbols-outlined top-[4px] mr-1" :style="{ 'fontSize': props.iconSize }">{{ props.icon }}</span><slot></slot>
    </a>
</template>