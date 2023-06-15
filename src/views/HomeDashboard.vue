<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import { ACTIVE_FORCES } from '../constants/routes';
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
      <IconButton icon="search" />
      <IconButton icon="done" />
      <IconButton icon="search" />
      <IconButton icon="expand_content" />
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