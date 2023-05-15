<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import { useNav } from '../composables/useNav';

const { goTo } = useNav();
const policeApiStore = usePoliceApiStore(); 
const forcesCount = computed(() => policeApiStore.forcesCount);

onMounted(() => {
  if (forcesCount.value > 0) return;
  policeApiStore.getForces();
});
</script>

<template>
  <div>
    <h2 class="text-slate-50 text-3xl font-bold mb-4">Dashboard</h2>
    
    <div class="flex flex-row flex-wrap gap-2">
      <FlexPanelItem>
        Active Forces <b class="ml-1"><LinkItem @click="goTo('active')" :underline="false">{{ forcesCount }}</LinkItem></b>
      </FlexPanelItem>

      <!-- <FlexPanelItem>
        {{ derbyshireCount }} Stop & Search (Derbyshire)
      </FlexPanelItem>
      
      <FlexPanelItem>
        {{ cumbriaCount }} Stop & Search (Cumbria)
      </FlexPanelItem> -->
    </div>
  </div>
</template>