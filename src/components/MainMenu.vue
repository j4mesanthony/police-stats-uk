<script setup lang="ts">
import MenuButton from './MenuButton.vue';
import MenuButtonGroup from './MenuButtonGroup.vue';

function testClick() {
    console.warn('click!');
}
</script>

<template>
    <div class="flex flex-col md:basis-1/5">
        <MenuButtonGroup title="Home">
            <MenuButton small @click="testClick">My Dashboard</MenuButton>
            <MenuButton small @click="testClick">Settings</MenuButton>
            <MenuButton small @click="testClick">Logout</MenuButton>
        </MenuButtonGroup>

        <MenuButtonGroup title="Force related">
            <MenuButton small @click="testClick">Find by location</MenuButton>
            <MenuButton small @click="testClick">Senior officers</MenuButton>
        </MenuButtonGroup>

        <MenuButtonGroup title="Crime related">
            <MenuButton small @click="testClick">Street level crimes</MenuButton>
            <MenuButton small @click="testClick">Crime categories</MenuButton>
        </MenuButtonGroup>
    </div>
</template>