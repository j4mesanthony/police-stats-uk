<script setup lang="ts">
import { HOME } from '../constants/routes';
import { useNav } from '../composables/useNav';

const { goTo } = useNav();

function openMenu() {
    console.warn('openMenu!');
}

function goHome() {
    goTo(HOME)
}
</script>

<template>
    <div class="fixed z-10 top-0 border-b-[1px] flex border-slate-600 flex-row w-full p-5 md:hidden shadow-lg bg-slate-900">
        <div class="flex">
            <LinkItem icon="menu" small :underline="false" @click="openMenu">Menu</LinkItem>
        </div>

        <div class="flex ml-auto">
            <LinkItem small :underline="false" @click="goHome">
                <span class="material-symbols-outlined text-slate-50">home</span>
            </LinkItem>
        </div>
    </div>
</template>