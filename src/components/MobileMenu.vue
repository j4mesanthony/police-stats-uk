<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { reactive } from 'vue';
import { HOME } from '../constants/routes';
import { useNav } from '../composables/useNav';
import ScreenOverlay from './ScreenOverlay.vue';
import MenuItems from './MenuItems.vue';

const { goTo } = useNav();

const Data = reactive({
    isMenuOn: false
});

function toggleMenu() {
    Data.isMenuOn = !Data.isMenuOn;
}

function goHome() {
    resetMenu();
    goTo(HOME);
}

function resetMenu() {
    Data.isMenuOn = false;
}

onBeforeUnmount(() => {
    resetMenu();
});
</script>

<template>
    <Teleport to="body">
        <Transition>
            <ScreenOverlay :isOn="Data.isMenuOn">
                <div class="pt-20 pl-5 pr-5">
                    <MenuItems @navigate="toggleMenu" />
                </div>
            </ScreenOverlay>
        </Transition>
    </Teleport>

    <div class="fixed z-10 top-0 border-b-[1px] flex border-slate-600 flex-row w-full p-5 md:hidden shadow-lg bg-slate-900">
        <div class="flex">
            <LinkItem icon="menu" iconSize="18px" small :underline="false" @click="toggleMenu">Menu</LinkItem>
        </div>

        <div class="flex mt-[-3px] ml-auto">
            <LinkItem icon="home" small :underline="false" @click="goHome" />
        </div>
    </div>
</template>

<style scoped>
/* TODO: Move to animations global stylesheet */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>