<script setup lang="ts">
import MainMenu from './components/MainMenu.vue';
</script>

<template>
  <Loader />
  <div class="h-screen flex flex-col pt-5 mx-auto overflow-scroll max-w-[1400px] md:flex-row">
    <MainMenu />

    <div class="p-5 md:basis-4/5 pb-30">
      <router-view></router-view>
    </div>
  </div>
</template>

