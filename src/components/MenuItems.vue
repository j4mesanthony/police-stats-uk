<script setup lang="ts">
import MenuButtonGroup from './MenuButtonGroup.vue';
import MenuButton from './MenuButton.vue';
import { computed } from 'vue';
import { RouteRecord } from 'vue-router';
import { useNav } from '../global/composables/useNav';
import { useStringFormatter } from '../global/composables/useStringFormatter';
import { Route } from '../models/route';

const emits = defineEmits(['navigate']);
const { toTitleCase } = useStringFormatter();
const { availableRoutes, goTo, router } = useNav();
const currentRoute = computed(() => router.currentRoute.value.name);
const routes = computed(() => recursiveTitleCaseRouteNames(availableRoutes));

function recursiveTitleCaseRouteNames(routes: Array<RouteRecord>): Array<Route> {
    return routes.map((x) => {
        const hide = x.meta?.hide ? true : false;
        let children = [];
        if (x.children) children.push(...recursiveTitleCaseRouteNames(x.children as Array<RouteRecord>));
        return new Route(toTitleCase(x.name as string), x.path, x.name === currentRoute.value, children, hide);
    });
}

function navigation(pathName: string) {
    emits('navigate');
    goTo(pathName);
}
</script>

<template>
    <MenuButtonGroup v-for="group in routes" :title="group.name">
        <template v-for="child in group.children">
            <MenuButton v-if="!child.hideFromMenu" :isActive="child.isActive" @click="navigation(child.name)" small>
                {{ child.name }}
            </MenuButton>
        </template>
    </MenuButtonGroup>
</template>