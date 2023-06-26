<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import { ACTIVE_FORCES } from '../constants/routes'; 
import { BarGraphDataObj } from '../interfaces/interfaceLibrary';
import DataSummaryPanel from '../components/DataSummaryPanel.vue';
import IconButton from '../components/IconButton.vue';

const store = usePoliceApiStore(); 
const forcesCount = computed(() => store.forcesCount);

const Data = reactive({
  isCrimesModalOn: false
});

onMounted(() => {
  // TODO: Refactor store action to getOrFetch data
  if (forcesCount.value > 0) return;
  store.getOrFetchForces();
});

let data: Array<BarGraphDataObj> = reactive([
  { category: 'Mon', value: 85 }, 
  { category: 'Tue', value: 54 }, 
  { category: 'Wed', value: 22 }, 
  { category: 'Thu', value: 89 }, 
  { category: 'Fri', value: 12 }, 
  { category: 'Sat', value: 75 },
  { category: 'Sun', value: 43 },
]);

randomise();

function randomise() {
  setInterval(() => {
    for (let i = 0; i < 7; i++) {
      data[i].value = Math.floor(Math.random() * 300);
    }
  }, 500);
}

function launchModal() {
  Data.isCrimesModalOn = true;  
}
</script>

<template>
  <div>
    <StickyHeading>Dashboard</StickyHeading>
    
    <div class="flex flex-row flex-wrap gap-5 mb-10">
      <FlexPanelItem class="relative basis-[300px]">
        <IconButton icon="fullscreen" :showOutline="false" class="absolute top-[7px] right-[7px]" @click="launchModal" />
        <BarGraph id="graph1" :data="data" barColor="cyan" :barPadding="0.6" />
      </FlexPanelItem>

      <DataSummaryPanel label="Active Forces" :data="forcesCount" :path="ACTIVE_FORCES" />
      <DataSummaryPanel label="Crimes" :data="0" />
      <DataSummaryPanel label="Investigations" :data="0" />
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <PopModal heading="Live Data Demo" :isOn="Data.isCrimesModalOn" @close="Data.isCrimesModalOn = false">
          <div class="relative p-6 border border-slate-400">
            <BarGraph id="graph2" :data="data" barColor="cyan" :barPadding="0.7" />
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