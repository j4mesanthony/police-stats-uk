<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { reactive } from 'vue';
import { HOME } from '../constants/routes';
import { useNav } from '../global/composables/useNav';
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
        <Transition name="fade">
            <ScreenOverlay :isOn="Data.isMenuOn">
                <div v-if="Data.isMenuOn" :class="{ 'menu-open': Data.isMenuOn }" class="absolute left-0 h-full text-left opacity-95 bg-slate-950 w-fit">
                    <div class="pt-20 pl-0 pr-10">
                        <MenuItems @navigate="toggleMenu" />
                    </div>
                </div>
            </ScreenOverlay>
        </Transition>
    </Teleport>

    <div class="fixed z-[60] top-0 border-b-[1px] flex border-slate-600 flex-row w-full p-5 md:hidden shadow-lg bg-slate-900">
        <div class="flex">
            <LinkItem icon="menu" iconSize="18px" small :underline="false" @click="toggleMenu">Menu</LinkItem>
        </div>

        <div class="flex mt-[-3px] ml-auto">
            <LinkItem icon="home" small :underline="false" @click="goHome" />
        </div>
    </div>
</template>

<style scoped>
@import '../global/styles/animations.scss';

.menu-open {
  animation-duration: 0.15s;
  animation-name: slidein;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: ease-out;
}
</style>