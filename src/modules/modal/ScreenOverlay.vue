<script setup lang="ts">
const props = defineProps({
    isOn: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div v-if="props.isOn" class="fixed top-0 z-50 flex items-center justify-center w-full h-screen text-center backdrop-blur-lg">
        <slot></slot>
    </div>
</template>