<script setup lang="ts">
import { RouteRecord } from 'vue-router';
import MenuButton from './MenuButton.vue';
import MenuButtonGroup from './MenuButtonGroup.vue';
import { useNav } from '../composables/useNav';
import { useStringFormatter } from '../composables/useStringFormatter';

const { allRoutes, goTo } = useNav();
const { toTitleCase } = useStringFormatter();
const routes: Array<RouteRecord> = allRoutes.filter(r => r.meta.isParent);
</script>
<!-- TODO: Refactor to computed with title casings -->
<template>
    <div class="flex flex-row md:flex-col md:basis-1/5 scroll-smooth overflow-scroll">
        <MenuButtonGroup  v-for="group in routes" :title="toTitleCase(group.name as string)">
            <MenuButton v-for="child in group.children" @click="goTo(child.name as string)" small>
                {{ toTitleCase(child.name as string) }}
            </MenuButton>
        </MenuButtonGroup>
    </div>
</template>