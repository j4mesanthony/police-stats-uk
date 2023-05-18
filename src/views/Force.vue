<template>
    <h2 class="mb-6 text-3xl font-bold text-slate-50">Force ({{ props.id }})</h2>
</template>

<script setup lang="ts">
const props = defineProps<{
    id: string
}>();
</script>