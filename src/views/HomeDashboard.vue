<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import { useNav } from '../composables/useNav';
import { ACTIVE_FORCES } from '../constants/routes';

const { goTo } = useNav();
const store = usePoliceApiStore(); 
const forcesCount = computed(() => store.forcesCount);

onMounted(() => {
  if (forcesCount.value > 0) return;
  store.getForces();
});
</script>

<template>
  <div>
    <h2 class="text-slate-50 text-3xl font-bold mb-6">Dashboard</h2>
    
    <div class="flex flex-row flex-wrap gap-2">
      <FlexPanelItem>
        <p class="mb-1 font-bold text-4xl"><LinkItem @click="goTo(ACTIVE_FORCES)" :underline="false">{{ forcesCount }}</LinkItem></p>
        <p>Active Forces</p>
        <!-- TODO: SummaryOutput :value :title -->
      </FlexPanelItem>

      <FlexPanelItem>
        <p class="mb-1 font-bold text-4xl">-</p>
        <p>Crimes</p>
      </FlexPanelItem>
      
      <FlexPanelItem>
        <p class="mb-1 font-bold text-4xl">-</p>
        <p>Investigations</p>
      </FlexPanelItem>
    </div>
  </div>
</template>