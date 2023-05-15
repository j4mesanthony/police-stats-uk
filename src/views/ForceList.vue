<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';

const store = usePoliceApiStore();
const allForces = computed(() => store.allForces);

onMounted(() => {
  if (allForces.value.length > 0) return;
  store.getForces();
});
</script>

<template>
    <div>
        <h2 class="text-slate-50 text-3xl font-bold mb-2">Available Forces by Region</h2>
        
        <div class="flex flex-row flex-wrap">
            <FlexPanelItem>
                <small>{{ allForces }}</small>
            </FlexPanelItem>
        </div>
    </div>
</template>