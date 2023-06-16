<script setup lang="ts">

</script>

<template>
    <h1 class="mb-2 text-sm font-semibold text-slate-800 dark:text-cyan-500">UK Policing Statistics</h1>
   
    <router-view v-slot="{ Component, route }">
        <Transition mode="out-in">
            <component :is="Component" :key="route.path" />
        </Transition>
    </router-view>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>