<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import { ACTIVE_FORCES } from '../constants/routes';
import DataSummaryPanel from '../components/DataSummaryPanel.vue';

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

function launchModal() {
  Data.isCrimesModalOn = true;
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

    <StickyHeading>Buttons</StickyHeading>
    <div class="flex flex-row flex-wrap gap-3 mb-10">
      <!-- TODO: IconButton -->
      <div class="p-2 top-[7px] right-[7px] rounded-md h-[38px] hover:shadow-md box-border text-center hover:border-cyan-500 border-[1px] border-slate-900 cursor-pointer duration-100 bg-slate-950 w-fit group">
        <span class="material-symbols-outlined relative text-[20px] transition-transform  text-slate-400 group-hover:text-cyan-500 group-hover:animate-pulse group-hover:scale-[1.3]">close</span>
      </div>
      <div class="p-2 top-[7px] right-[7px] rounded-md h-[38px] hover:shadow-md box-border text-center hover:border-cyan-500 border-[1px] border-slate-900 cursor-pointer duration-100 bg-slate-950 w-fit group">
        <span class="material-symbols-outlined relative text-[20px] transition-transform  text-slate-400 group-hover:text-cyan-500 group-hover:animate-pulse group-hover:scale-[1.3]">done</span>
      </div>
      <div class="p-2 top-[7px] right-[7px] rounded-md h-[38px] hover:shadow-md box-border text-center hover:border-cyan-500 border-[1px] border-slate-900 cursor-pointer duration-100 bg-slate-950 w-fit group">
        <span class="material-symbols-outlined relative text-[20px] transition-transform  text-slate-400 group-hover:text-cyan-500 group-hover:animate-pulse group-hover:scale-[1.3]">search</span>
      </div>
      <div class="p-2 top-[7px] right-[7px] rounded-md h-[38px] hover:shadow-md box-border text-center hover:border-cyan-500 border-[1px] border-slate-900 cursor-pointer duration-100 bg-slate-950 w-fit group">
        <span class="material-symbols-outlined relative text-[20px] transition-transform  text-slate-400 group-hover:text-cyan-500 group-hover:animate-pulse group-hover:scale-[1.3]">expand_content</span>
      </div>
    </div>


    <Teleport to="body">
      <Transition name="fade">
        <PopModal heading="PopDialog" :isOn="Data.isCrimesModalOn" @close="Data.isCrimesModalOn = false">

          <!-- TODO: D3Graph -->
          <div class="flex p-6 border border-slate-400">
            <span class="text-slate-400">D3 Graph to come</span>
          </div>
        </PopModal>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
@import '../global/styles/animations.scss';
</style>