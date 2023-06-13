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

function openMenu() {
    console.warn('openMenu!');
}

function goHome() {
    console.warn('Home');
}
</script>

<template>
    <div class="fixed overflow-scroll left-[-100px] md:left-0 transition-[left] opacity-0 md:opacity-100 md:relative md:flex md:flex-col grow md:basis-1/5">
        <MenuButtonGroup v-for="group in routes" :title="group.name">
            <template v-for="child in group.children">
                <MenuButton v-if="!child.hideFromMenu" :isActive="child.isActive" @click="goTo(child.name)" small>
                    {{ child.name }}
                </MenuButton>
            </template>
        </MenuButtonGroup>
    </div>

    <!-- TODO: MobileMenu -->
    <div class="fixed z-10 top-0 border-b-[1px] border-slate-600 flex w-full p-5 md:hidden shadow-lg bg-slate-900">
        <LinkItem small :underline="false" @click="openMenu">
            <!-- TODO: Add icon as an option to LinkItem -->
            <span class="relative material-symbols-outlined top-[4px] mr-1" style="font-size: 18px;">menu</span>Menu
        </LinkItem>

        <!-- <LinkItem small :underline="false" @click="goHome">
            <span class="material-symbols-outlined text-slate-50">home</span>
        </LinkItem> -->
    </div>
</template>