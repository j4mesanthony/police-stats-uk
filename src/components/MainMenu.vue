<script setup lang="ts">
import { onMounted } from 'vue';
import { reactive } from 'vue';
import { useEventListener } from '../global/composables/useEventListener';
import MenuItems from './MenuItems.vue';
import MobileMenu from './MobileMenu.vue';

onMounted(() => toggleMobileMenu());

const Data = reactive({
    isMobileMenuOn: false
});

useEventListener('resize', toggleMobileMenu);

function toggleMobileMenu() {
    const width = window.innerWidth;
    Data.isMobileMenuOn = width < 768;
}
</script>

<template>
    <div class="fixed left-[-100px] md:left-0 transition-[left] opacity-0 md:opacity-100 md:relative md:flex md:flex-col grow">
        <MenuItems />
    </div>

    <MobileMenu v-if="Data.isMobileMenuOn" />
</template>