<script setup lang="ts">

</script>

<template>
    <h1 class=" text-slate-800 dark:text-cyan-500 text-sm font-semibold mb-2">UK Policing Statistics</h1>
   
    <router-view v-slot="{ Component, route }">
        <transition appear mode="out-in">
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>