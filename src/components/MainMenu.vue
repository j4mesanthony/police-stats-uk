<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import MenuItems from './MenuItems.vue';
import MobileMenu from './MobileMenu.vue';

// Move this to a composable - useResize(toggleMobileMenu)?
onMounted(() => { // 768
    window.addEventListener('resize', toggleMobileMenu);
});

const Data = reactive({
    isMobileMenuOn: false
});

function toggleMobileMenu() {
    const width = window.innerWidth;
    Data.isMobileMenuOn = width < 768;
}
</script>

<template>
    <div class="fixed overflow-scroll left-[-100px] md:left-0 transition-[left] opacity-0 md:opacity-100 md:relative md:flex md:flex-col grow md:basis-1/5">
        <MenuItems />
    </div>

    <MobileMenu v-if="Data.isMobileMenuOn" />
</template>