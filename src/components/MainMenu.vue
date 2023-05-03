<script setup lang="ts">
import MenuButton from './MenuButton.vue';
import MenuButtonGroup from './MenuButtonGroup.vue';
import { computed } from 'vue';
import { RouteRecord } from 'vue-router';
import { useNav } from '../composables/useNav';
import { useStringFormatter } from '../composables/useStringFormatter';
import { Route } from '../models/route';

const { toTitleCase } = useStringFormatter();
const { availableRoutes, goTo } = useNav();
const routes = computed(() => recursiveTitleCaseRouteNames(availableRoutes));

function recursiveTitleCaseRouteNames(original: Array<RouteRecord>): Array<Route> {
    let remapped: Array<Route> = original.map((x) => {
        let children = [];
        if (x.children) children.push(...recursiveTitleCaseRouteNames(x.children as Array<RouteRecord>));
        return new Route(toTitleCase(x.name as string), x.path, children);
    });

    return remapped;
}
</script>

<template>
    <div class="flex flex-row md:flex-col md:basis-1/5 scroll-smooth overflow-scroll">
        <MenuButtonGroup v-for="group in routes" :title="group.name">
            <MenuButton v-for="child in group.children" @click="goTo(child.name)" small>
                {{ child.name }}
            </MenuButton>
        </MenuButtonGroup>
    </div>
</template>