<script setup lang="ts">
import { computed } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';

const store = usePoliceApiStore();
const showLoader = computed(() => store.isLoading);
</script>

<template>
    <div v-show="showLoader" class="loader absolute w-full h-[1px] bg-slate-800 opacity-0"></div>
</template>

<style scoped>
.loader{
    background: #00D4FF;
    animation: load 2s 0.5s infinite linear;
}

@keyframes load {
    0%, 
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}
</style>