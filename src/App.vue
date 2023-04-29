<script setup lang="ts">
import MainMenu from './components/MainMenu.vue';
import LinkItem from './components/LinkItem.vue';
</script>

<template>
  <div class="dark: bg-gradient-to-tr from-slate-700 to-slate-900 h-screen flex flex-col md:flex-row mx-auto pt-5">
    <MainMenu />

    <div class="md:basis-4/5 p-5">
      <h1 class="text-cyan-500 text-sm font-semibold mb-2">UK Policing Statistics</h1>
      <h2 class="text-slate-50 text-3xl font-bold mb-4">Dashboard</h2>

      <p class="text-slate-50">View other stuff <LinkItem>here</LinkItem>.</p>
    </div>
  </div>
</template>

