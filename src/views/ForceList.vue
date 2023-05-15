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
        <h2 class="text-slate-50 text-3xl font-bold mb-6">Available Forces by Region</h2>
        
        <div class="flex flex-row flex-wrap">
            <FlexPanelItem>
                <table class="border-collapse table-auto w-full text-sm">
                    <tr>
                        <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Name</th>
                        <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Action</th>
                    </tr>
                    <tbody class="bg-white dark:bg-slate-800">
                        <tr>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">Avon and Somerset Constabulary</td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">
                                <LinkItem class="mr-1" :underline="false">view</LinkItem>
                            </td>
                        </tr>

                        <tr>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">Merseyside Police</td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">
                                <LinkItem class="mr-1" :underline="false">view</LinkItem>
                            </td>
                        </tr>

                        <tr>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">Greater Manchester Police</td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">
                                <LinkItem class="mr-1" :underline="false">view</LinkItem>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- <small>{{ allForces }}</small> -->
            </FlexPanelItem>
        </div>
    </div>
</template>