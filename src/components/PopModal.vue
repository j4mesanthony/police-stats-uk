<script setup lang="ts">
const emits = defineEmits(['close']);

const props = defineProps({
    isOn: {
        type: Boolean,
        default: false
    },

    heading: {
        type: String,
        default: 'PopModal'
    },
});
</script>

<template>
    <div v-if="isOn" class="z-[60] fixed top-0 h-full w-full p-6 pt-14 text-left box-border shadow-md rounded-md bg-slate-900">
        <LinkItem icon="close" iconSize="30px" class="absolute select-none material-symbols-outlined top-4 right-3 text-slate-50" @click="emits('close')" />
        <h1 class="mb-3 text-2xl font-bold text-slate-50">{{ props.heading }}</h1>
        <slot></slot>
    </div>
</template>