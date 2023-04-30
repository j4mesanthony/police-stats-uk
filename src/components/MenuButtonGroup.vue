<script setup lang="ts">
import { RouteRecordName } from 'vue-router';

const props = defineProps<{
    title: RouteRecordName | undefined
}>();
</script>

<template>
    <div class="p-5">
        <h4 class="text-slate-50 font-semibold text-md mb-2">{{ title }}</h4>
        <slot></slot>
    </div>
</template>