<script setup lang="ts">
import { RouteRecordName } from 'vue-router';

const props = defineProps<{
    title: RouteRecordName | undefined
}>();
</script>

<template>
    <div class="p-5">
        <h4 class="mb-2 font-semibold text-slate-50 text-md">{{ props.title }}</h4>
        <slot></slot>
    </div>
</template>