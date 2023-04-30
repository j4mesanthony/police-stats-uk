<script setup lang="ts">
const props = defineProps({
    small: {
        type: Boolean,
        default: false
    },

    large: {
        type: Boolean,
        default: false
    },

    isActive: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div class="group block py-1 px-3 cursor-pointer border-l-[1px] border-slate-600 hover:border-slate-50 dark:hover:border-slate-300 mb-1 md:hover:pl-4 transition-all">
        <LinkItem :small="small" :large="large" :underline="false" class="group-hover:text-slate-50 dark:group-hover:text-slate-300">
            <slot>Button Text</slot>
        </LinkItem>
    </div>
</template>