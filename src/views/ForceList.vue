<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import { useNav } from '../composables/useNav';
import { useWindowSize } from '../composables/useWindowSize';
import { FORCE } from '../constants/routes';

const { goTo } = useNav();
const { isMobile } = useWindowSize();
const store = usePoliceApiStore();
const allForces = computed(() => store.allForces);

onMounted(() => {
  if (allForces.value.length > 0) return;
  store.fetchForces();
});
</script>

<template>
    <div>
        <StickyHeading>Forces by Region</StickyHeading>
        
        <!-- TODO: TableWrapper -->
        <RecycleScroller
            :key="allForces.length"
            :items="allForces"
            :item-size="1"
            key-field="id"
            v-slot="{ item }">
            
            <div :class="{ 'hover:bg-cyan-500 hover:text-slate-50': !isMobile }" 
                 class="p-4 pl-3 pr-3 text-sm text-left transition-all duration-300 border-b cursor-pointer dark:border-slate-700 dark:text-slate-400"
                @click="goTo({ name: FORCE, params: { id: item.id } })">
                {{ item.name }}
            </div>
        </RecycleScroller>
    </div>
</template>