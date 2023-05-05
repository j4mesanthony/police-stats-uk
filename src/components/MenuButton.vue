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
    <div 
        class="group block py-1 px-3 cursor-pointer border-l-[1px] border-slate-600 hover:border-slate-50 dark:hover:border-slate-300 mb-1 md:hover:pl-4 transition-all"
       :class="{ 'dark:border-cyan-500 dark:hover:border-cyan-500 pl-4' : isActive }">
            <LinkItem 
                :small="small" 
                :large="large" 
                :underline="false" 
                :isActive="isActive"
                class="group-hover:text-slate-50 dark:group-hover:text-slate-300"
                :class="{ 'dark:group-hover:text-cyan-400' : isActive }">
                <slot>Button Text</slot>
            </LinkItem>
    </div>
</template>