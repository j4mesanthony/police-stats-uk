<script setup lang="ts">
import { computed, onMounted, reactive, watch } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import { ACTIVE_FORCES } from '../constants/routes'; 
import { useD3Container } from '../visualisations/composables/useD3Container';
import { useD3BarGraph } from '../visualisations/composables/useD3BarGraph';
import DataSummaryPanel from '../components/DataSummaryPanel.vue';
import IconButton from '../components/IconButton.vue';

const { createSvg } = useD3Container();
const { visualisation } = useD3BarGraph();
const store = usePoliceApiStore(); 
const forcesCount = computed(() => store.forcesCount);

const Data = reactive({
  isCrimesModalOn: false
});

onMounted(() => {
  // TODO: Refactor store action to getOrFetch data
  if (forcesCount.value > 0) return;
  store.fetchForces();

  createSvg('#graph', 300, 160);

  visualisation(data);
  random();
});

let data = reactive([
  { category: 'A', value: 85 }, 
  { category: 'B', value: 54 }, 
  { category: 'C', value: 22 }, 
  { category: 'D', value: 89 }, 
  { category: 'E', value: 12 }, 
  { category: 'F', value: 75 },
  { category: 'G', value: 43 },
]);

watch(data, () => visualisation(data));

function random() {
  setInterval(() => {
    for (let i = 0; i < 6; i++) {
      data[i].value = Math.floor(Math.random() * 300);
    }
  }, 800);
}
// function launchModal() {
//   Data.isCrimesModalOn = true;  
// }
</script>

<template>
  <div>
    <StickyHeading>Dashboard</StickyHeading>
    
    <div class="flex flex-row flex-wrap gap-5 mb-10">
      <FlexPanelItem id="graph" class="relative">
        <IconButton icon="fullscreen" :showOutline="false" class="absolute top-[7px] right-[7px]" />
      </FlexPanelItem>
      
      <DataSummaryPanel label="Active Forces" :data="forcesCount" :path="ACTIVE_FORCES" />
      <DataSummaryPanel label="Crimes" :data="0" />
      <DataSummaryPanel label="Investigations" :data="0" />
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <PopModal heading="Live Data Demo" :isOn="Data.isCrimesModalOn" @close="Data.isCrimesModalOn = false">
          <IconButton icon="play_arrow" @click="random" class="mt-3 mb-3" />
          <div class="relative flex p-6 border border-slate-400">
            <div id="bars" class="relative flex flex-wrap gap-5 mb-10 grow"></div>
          </div>
          <small class="text-slate-300">{{ data }}</small>
        </PopModal>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
@import '../global/styles/animations.scss';
</style>