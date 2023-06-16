<script setup lang="ts">
import { computed, onMounted, reactive, watch } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import { ACTIVE_FORCES } from '../constants/routes';
import { useD3 } from '../visualisations/composables/useD3'; 
import DataSummaryPanel from '../components/DataSummaryPanel.vue';
import IconButton from '../components/IconButton.vue';

const { selectParentAndChildren, EASE, createNodes } = useD3();
const store = usePoliceApiStore(); 
const forcesCount = computed(() => store.forcesCount);

const Data = reactive({
  isCrimesModalOn: false
});

onMounted(() => {
  // TODO: Refactor store action to getOrFetch data
  if (forcesCount.value > 0) return;
  store.fetchForces();
});

let data = reactive([100,100,100,100,100,100,100,100,100]);
watch(data, () => visualisation());

function random() {
  setInterval(() => {
    for (let i = 0; i < 9; i++) {
      data[i] = Math.floor(Math.random()*300);
    }
  }, 800);
}

function visualisation() {
  const selector = selectParentAndChildren('#bars', '.bar');
  const binding = selector().data(data);
  const creator = createNodes(binding);
  
  creator
    .append("div")
    .attr('class', 'bar w-[5%] rounded-md bg-gradient-to-b from-cyan-500 to-cyan-600');

  selector()
    .transition()
    .ease(EASE.quadOut)
    .duration(800)
    .style('height', (d: any) => `${d}px`);
}

function launchModal() {
  Data.isCrimesModalOn = true;  
  setTimeout(() => visualisation(), 200)
}
</script>

<template>
  <div>
    <StickyHeading>Dashboard</StickyHeading>
    
    <div class="flex flex-row flex-wrap gap-5 mb-10">
      <DataSummaryPanel label="Active Forces" :data="forcesCount" :path="ACTIVE_FORCES" />
      <DataSummaryPanel label="Crimes" :data="0" @click="launchModal" />
      <DataSummaryPanel label="Investigations" :data="0" />
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <PopModal heading="Live Data Demo" :isOn="Data.isCrimesModalOn" @close="Data.isCrimesModalOn = false">
          <IconButton icon="play_arrow" @click="random" class="mt-3 mb-3" />
          <!-- TODO: D3Graph -->
          <div class="relative flex h-[50%] p-6 border border-slate-400">
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