<script setup lang="ts">
import MenuButton from './MenuButton.vue';
import MenuButtonGroup from './MenuButtonGroup.vue';
</script>

<template>
    <div class="flex flex-col md:basis-1/5 scroll-smooth overflow-scroll">
        <MenuButtonGroup title="Home">
            <MenuButton small>My Dashboard</MenuButton>
            <MenuButton small>Settings</MenuButton>
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