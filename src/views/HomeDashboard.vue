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
  Data.isCrimesModalOn = true
}
</script>

<template>
  <div>
    <StickyHeading>Dashboard</StickyHeading>
    
    <div class="flex flex-row flex-wrap gap-2">
      <DataSummaryPanel label="Active Forces" :data="forcesCount" :path="ACTIVE_FORCES" />
      <DataSummaryPanel label="Crimes" :data="0" @click="launchModal" />
      <DataSummaryPanel label="Investigations" :data="0" />
    </div>

    <Teleport to="body">
      <Transition>
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
/* TODO: Move to animations global stylesheet */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.grow-enter-active,
.grow-leave-active {
  transition: width 0.25s ease;
}

.grow-enter-from,
.grow-leave-to {
  width: 0px;
}
</style>