<script setup lang="ts">
import MenuButton from './MenuButton.vue';
import MenuButtonGroup from './MenuButtonGroup.vue';
// import { useNav } from '../composables/useNav';

import { useRouter } from 'vue-router';
const router = useRouter();
// TODO: Implement menu buttons using available routes.

// TODO: Move to useNav() composable
interface route {
    name: string
}

function goTo(path: route): void {
    router.push(path);
}
</script>

<template>
    <div class="flex flex-row md:flex-col md:basis-1/5 scroll-smooth overflow-scroll">
        <MenuButtonGroup title="Home">
            <MenuButton small @click="goTo({ name: 'home' })">My Dashboard</MenuButton>
            <MenuButton small @click="goTo({ name: 'settings' })">Settings</MenuButton>
            <MenuButton small>Logout</MenuButton>
        </MenuButtonGroup>

        <MenuButtonGroup title="Force related">
            <MenuButton small>Find by location</MenuButton>
            <MenuButton small>Senior officers</MenuButton>
        </MenuButtonGroup>

        <MenuButtonGroup title="Crime related">
            <MenuButton small>Street level crimes</MenuButton>
            <MenuButton small>Crime categories</MenuButton>
        </MenuButtonGroup>
    </div>
</template>