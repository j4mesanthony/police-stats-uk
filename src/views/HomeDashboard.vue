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

let data = reactive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]);
watch(data, () => visualisation());

function random() {
  let n = 25;
  for (let i = 0; i < n; i++) {
    data[i] = Math.floor(Math.random()*100);
  }
}

function visualisation() {
  const selector = selectParentAndChildren('#bars', '.bar');
  const binding = selector().data(data);
  const creator = createNodes(binding);
  
  creator
    .append("div")
    .attr('class', 'bar w-[1%] rounded-md bg-cyan-500');

  selector()
    .transition()
    .ease(EASE.quadOut)
    .duration(500)
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
        <PopModal heading="PopDialog" :isOn="Data.isCrimesModalOn" @close="Data.isCrimesModalOn = false">
          <small class="text-slate-300">{{ data }}</small>
          <!-- TODO: D3Graph -->
          <div class="relative flex p-6 border border-slate-400">
            <div id="bars" class="relative flex flex-wrap gap-5 mb-10 h-[200px] grow"></div>
          </div>

          <IconButton icon="refresh" @click="random" class="mt-3" />
        </PopModal>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
@import '../global/styles/animations.scss';
</style>