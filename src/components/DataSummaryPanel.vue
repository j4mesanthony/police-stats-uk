<script setup lang="ts">
const props = defineProps({
    data: {
        type: [Number, String],
        required: true
    },

    label: {
        type: String,
        required: true
    },
})
</script>

<template>
    <FlexPanelItem class="grow basis-80">
        <p class="mb-1 text-4xl font-bold">{{ props.data }}</p>
        <p>{{ props.label }}</p>
    </FlexPanelItem>
</template>