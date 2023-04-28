<script setup lang="ts">
import LinkItem from './LinkItem.vue';

const props = defineProps({
    small: {
        type: Boolean,
        default: false
    },

    large: {
        type: Boolean,
        default: false
    },
});
</script>

<template>
    <div class="group block py-1 px-3 cursor-pointer border-l-[1px] border-slate-600 hover:border-slate-300 mb-1">
        <LinkItem :small="small" :large="large" class="group-hover:text-slate-300">
            <slot>Button Text</slot>
        </LinkItem>
    </div>
</template>