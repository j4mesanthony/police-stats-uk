<script setup lang="ts">
import { computed } from 'vue';
import { RouteRecord } from 'vue-router';
import MenuButton from './MenuButton.vue';
import MenuButtonGroup from './MenuButtonGroup.vue';
import { useNav } from '../composables/useNav';
import { useStringFormatter } from '../composables/useStringFormatter';

const { groupedRoutes, goTo } = useNav();
const { toTitleCase } = useStringFormatter();

interface IRoute {
    name: string,
    path: string,
    children?: Array<Route>,
}

class Route implements IRoute {
    constructor(public name: string, public path: string, public children: Array<Route>) {};
}

function recursiveTitleCaseRouteNames(original: Array<RouteRecord>): Array<Route> {
    let remapped = original.map((x) => {
        let children = [];
        if (x.children) children.push(...recursiveTitleCaseRouteNames(x.children as Array<RouteRecord>));
        return new Route(toTitleCase(x.name as string), x.path, children);
    });

    return remapped;
}

const remapped = computed(() => recursiveTitleCaseRouteNames(groupedRoutes));

</script>

<template>
    <div class="flex flex-row md:flex-col md:basis-1/5 scroll-smooth overflow-scroll">
        <MenuButtonGroup  v-for="group in remapped" :title="group.name">
            <MenuButton v-for="child in group.children" @click="goTo(child.name)" small>
                {{ child.name }}
            </MenuButton>
        </MenuButtonGroup>
    </div>
</template>