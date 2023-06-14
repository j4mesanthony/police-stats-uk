<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import { useNav } from '../composables/useNav';
import { FORCE } from '../constants/routes';

const { goTo } = useNav();
const store = usePoliceApiStore();
const allForces = computed(() => store.allForces);

onMounted(() => {
  if (allForces.value.length > 0) return;
  store.fetchForces();
});
</script>

<template>
    <div>
        <h2 class="mb-6 text-3xl font-bold text-slate-50">Available Forces by Region</h2>
        
        <!-- TODO: Implement VirtualScroller -->

            <!-- <FlexPanelItem> -->
                <table class="text-sm border-collapse table-auto md:w-full">
                    <tr>
                        <th class="p-4 pt-0 pb-3 font-medium text-left border-b dark:border-slate-600 text-slate-400 dark:text-slate-200">Name</th>
                        <th class="p-4 pt-0 pb-3 font-medium text-center border-b dark:border-slate-600 text-slate-400 dark:text-slate-200">Stop Searches</th>
                    </tr>
                    <tbody>
                        <tr v-for="force in allForces" :key="force.id" class="cursor-pointer group"  @click="goTo({ name: FORCE, params: { id: force.id } })">
                            <td class="p-4 text-left border-b group-hover:bg-slate-900 border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">{{ force.name }}</td>
                            <td class="p-4 text-center border-b group-hover:bg-slate-900 border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">-</td>
                        </tr>
                    </tbody>
                </table>

                <!-- <small>{{ allForces }}</small> -->
            <!-- </FlexPanelItem> -->

    </div>
</template>