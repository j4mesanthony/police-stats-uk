<script setup lang="ts">
import MenuItems from './MenuItems.vue';
import MobileMenu from './MobileMenu.vue';
</script>

<template>
    <div class="fixed overflow-scroll left-[-100px] md:left-0 transition-[left] opacity-0 md:opacity-100 md:relative md:flex md:flex-col grow md:basis-1/5">
        <MenuItems />
    </div>

    <MobileMenu />
</template>