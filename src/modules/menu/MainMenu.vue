<script setup lang="ts">
import { onMounted } from 'vue';
import { reactive } from 'vue';
import { useEventListener } from '@/global/composables/useEventListener';
import MenuItems from './MenuItems.vue';
import MobileMenu from './MobileMenu.vue';

onMounted(() => toggleMobileMenu());

const LG_BREAK_POINT = 1024;
const Data = reactive({
    isMobileMenuOn: false
});

useEventListener('resize', toggleMobileMenu);

function toggleMobileMenu() {
    const width = window.innerWidth;
    Data.isMobileMenuOn = width < LG_BREAK_POINT;
}
</script>

<template>
    <div class="fixed left-[-120px] lg:left-0 transition-[left] opacity-0 lg:opacity-100 lg:relative lg:flex lg:flex-col grow">
        <MenuItems />
    </div>

    <MobileMenu v-if="Data.isMobileMenuOn" />
</template>