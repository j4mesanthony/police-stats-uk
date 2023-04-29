<script setup lang="ts">
import { computed } from 'vue'; 
const props = defineProps({
    title: {
        type: String,
        required: true
    }
});

const heading = computed<string>(() => `${props.title}:`)
</script>

<template>
    <div class="p-5">
        <h4 class="text-slate-50 font-semibold text-md mb-2">{{ heading }}</h4>
        <slot></slot>
    </div>
</template>