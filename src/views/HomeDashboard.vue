<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import { ACTIVE_FORCES } from '../constants/routes';
import DataSummaryPanel from '../components/DataSummaryPanel.vue';

const store = usePoliceApiStore(); 
const forcesCount = computed(() => store.forcesCount);

onMounted(() => {
  if (forcesCount.value > 0) return;
  store.fetchForces();
});
</script>

<template>
  <div>
    <StickyHeading>Dashboard</StickyHeading>
    
    <div class="flex flex-row flex-wrap gap-2">
      <DataSummaryPanel label="Active Forces" :data="forcesCount" :path="ACTIVE_FORCES" />
      <DataSummaryPanel label="Crimes" :data="0" />
      <DataSummaryPanel label="Investigations" :data="0" />
    </div>
  </div>
</template>