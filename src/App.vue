<script setup lang="ts">
import MainMenu from './components/MainMenu.vue';
</script>

<template>
  <div class="bg-gradient-to-tr from-slate-300 to-slate-400 dark:bg-gradient-to-tr dark:from-slate-700 dark:to-slate-900 h-screen flex flex-col md:flex-row mx-auto pt-5">
    <MainMenu />

    <div class="md:basis-4/5 p-5">
      <router-view></router-view>
    </div>
  </div>
</template>

