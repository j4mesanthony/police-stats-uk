<script setup lang="ts">
import MenuButton from './MenuButton.vue';
import MenuButtonGroup from './MenuButtonGroup.vue';
import { computed } from 'vue';
import { RouteRecord } from 'vue-router';
import { useNav } from '../composables/useNav';
import { useStringFormatter } from '../composables/useStringFormatter';
import { Route } from '../models/route';

const { toTitleCase } = useStringFormatter();
const { availableRoutes, goTo, router } = useNav();
const currentRoute = computed(() => router.currentRoute.value.name);
const routes = computed(() => recursiveTitleCaseRouteNames(availableRoutes));

function recursiveTitleCaseRouteNames(original: Array<RouteRecord>): Array<Route> {
    let remapped: Array<Route> = original.map((x) => {
        const hide = x.meta?.hide ? true : false;
        let children = [];
        if (x.children) children.push(...recursiveTitleCaseRouteNames(x.children as Array<RouteRecord>));
        return new Route(toTitleCase(x.name as string), x.path, x.name === currentRoute.value, children, hide);
    });
    
    return remapped;
}
</script>

<template>
    <div class="fixed bottom-0 flex flex-row w-full overflow-scroll bg-slate-700 md:bg-transparent md:relative md:flex-col md:basis-1/5 scroll-smooth">
        <MenuButtonGroup v-for="group in routes" :title="group.name">
            <template v-for="child in group.children">
                <MenuButton v-if="!child.hideFromMenu" :isActive="child.isActive" @click="goTo(child.name)" small>
                    {{ child.name }}
                </MenuButton>
            </template>
        </MenuButtonGroup>
    </div>
</template>