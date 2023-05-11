<script setup lang="ts">
import { computed } from 'vue';
import { useFetch } from '../composables/useFetch';

const { data: forces } = useFetch('forces');
const { data: derbyshireStats } = useFetch('stops-force?force=derbyshire');
const { data: cumbriaStats } = useFetch('stops-force?force=cumbria');

const forceCount = computed(() => forces.value?.length ?? 0);
const derbyshireCount = computed(() => derbyshireStats.value?.length ?? 0);
const cumbriaCount = computed(() => cumbriaStats.value?.length ?? 0);
</script>

<template>
  <div>
    <h2 class="text-slate-50 text-3xl font-bold mb-4">Dashboard</h2>
    
    <div class="flex flex-row flex-wrap gap-2">
      <FlexPanelItem>
        {{ forceCount }} Active Forces
      </FlexPanelItem>

      <FlexPanelItem>
        {{ derbyshireCount }} Stop & Search (Derbyshire)
      </FlexPanelItem>
      
      <FlexPanelItem>
        {{ cumbriaCount }} Stop & Search (Cumbria)
      </FlexPanelItem>
    </div>
  </div>
</template>