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
  store.getForces();
});
</script>

<template>
    <div>
        <h2 class="mb-6 text-3xl font-bold text-slate-50">Available Forces by Region</h2>
        
        <div class="flex flex-row flex-wrap">
            <!-- <FlexPanelItem> -->
                <table class="w-full text-sm border-collapse table-auto">
                    <tr>
                        <th class="p-4 pt-0 pb-3 pl-8 font-medium text-left border-b dark:border-slate-600 text-slate-400 dark:text-slate-200">Name</th>
                        <th class="p-4 pt-0 pb-3 pl-8 font-medium text-left border-b dark:border-slate-600 text-slate-400 dark:text-slate-200">Action</th>
                    </tr>
                    <tbody class="bg-white dark:bg-slate-800">
                        <tr v-for="force in allForces" :key="force.id">
                            <td class="p-4 pl-8 text-left border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">{{ force.name }}</td>
                            <td class="p-4 pl-8 text-left border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                <LinkItem class="mr-1" :underline="false" @click="goTo({ name: FORCE, params: { id: force.id } })">View</LinkItem>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- <small>{{ allForces }}</small> -->
            <!-- </FlexPanelItem> -->
        </div>
    </div>
</template>