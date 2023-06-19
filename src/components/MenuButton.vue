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
        class="group block py-1 px-3 cursor-pointer border-l-[1px] border-slate-600 hover:border-slate-50 mb-1 transition-all"
       :class="[ props.isActive ? 'dark:border-cyan-500 dark:hover:border-cyan-500 lg:pl-5' : 'dark:hover:border-slate-300 lg:hover:pl-4' ]">
            <LinkItem 
                :small="props.small" 
                :large="props.large" 
                :underline="false" 
                :isActive="props.isActive"
                class="group-hover:text-slate-50"
                :class="{ 'dark:group-hover:text-cyan-400' : props.isActive }">
                <slot>Button Text</slot>
            </LinkItem>
    </div>
</template>