<script setup lang="ts">
import { computed } from 'vue';
import { useFetch } from '../composables/useFetch';

const { data } = useFetch('api/crimes-street-dates');
const dataSets = computed(() => data.value?.map(x => x.date));
const count = computed(() => data.value?.length);
</script>

<template>
  <div>
    <h2 class="text-slate-50 text-3xl font-bold mb-4">Dashboard</h2>
    
    <div class="flex flex-row flex-wrap gap-2">
      <FlexPanelItem>
        <p class="text-left"><small class="text-cyan-400">Months: {{ count }}</small></p>
        <small>{{ dataSets }}</small>
      </FlexPanelItem>

      <FlexPanelItem>
        D3 Graph Visualisation
      </FlexPanelItem>
      
      <FlexPanelItem>
        D3 Graph Visualisation
      </FlexPanelItem>
    </div>
  </div>
</template>