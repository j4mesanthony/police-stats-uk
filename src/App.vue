<script setup lang="ts">
import MainMenu from './modules/menu/MainMenu.vue';
</script>

<template>
  <Loader />
  <div class="h-screen flex flex-col pb-36 lg:pb-0 z-50 pt-20 lg:pt-5 mx-auto max-w-[1400px] lg:flex-row">
    <MainMenu />

    <div class="p-5 basis-1 lg:basis-4/5 pb-30">
      <router-view></router-view>
    </div>
  </div>
</template>

