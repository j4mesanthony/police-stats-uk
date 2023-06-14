<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePoliceApiStore } from '../stores/usePoliceApiStore';
import { useNav } from '../composables/useNav';
import { FORCE } from '../constants/routes';
import { Force } from '../interfaces/interfaceLibrary';
import DataTable from '../components/DataTable.vue';

const store = usePoliceApiStore();
const allForces = computed(() => store.allForces);
const { goTo } = useNav();

onMounted(() => {
  if (allForces.value.length > 0) return;
  store.fetchForces();
});

function openForce(item: Force) {
    goTo({ name: FORCE, params: { id: item.id } })
}
</script>

<template>
    <div>
        <StickyHeading>Forces by Region</StickyHeading>
        <DataTable :data="allForces" isRowsClickable @click="openForce" />
    </div>
</template>