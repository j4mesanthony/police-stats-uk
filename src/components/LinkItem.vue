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
    }
});

const emit = defineEmits(['click']);
</script>

<template>
    <a @click="emit('click')" :class="{ 'text-sm': small, 'text-lg': large, 'underline': underline }" class="text-slate-400 cursor-pointer hover:text-slate-300">
        <slot>Anchor Text</slot>
    </a>
</template>