<script setup lang="ts">
import MainMenu from './components/MainMenu.vue';
</script>

<template>
  <div class="dark: bg-slate-900 h-screen flex flex-col md:flex-row mx-auto pt-5">
    <MainMenu />

    <div class="md:basis-4/5 p-5">
      <h1 class="text-slate-50 text-3xl font-bold">UK Policing Statistics Dashboard</h1>
    </div>
  </div>
</template>

