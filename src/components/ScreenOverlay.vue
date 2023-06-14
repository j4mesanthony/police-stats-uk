<script setup lang="ts">
const props = defineProps({
    isOn: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div v-if="props.isOn" class="fixed top-0 z-50 w-full h-screen opacity-95 bg-slate-950">
        <slot></slot>
    </div>
</template>