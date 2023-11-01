<script setup lang="ts">
const props = defineProps({
    icon: {
        type: String,
        required: true,
        validator: (icon) => icon !== ''
    },

    showOutline: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <div :class="{ 'hover:shadow-md bg-slate-950 hover:border-cyan-500 border-[1px] border-slate-900': props.showOutline }" class="p-2 top-[7px] right-[7px] rounded-md h-[38px] box-border text-center select-none cursor-pointer duration-100 w-fit group">
        <span data-test="icon" class="material-symbols-outlined relative text-[20px] transition-transform  text-slate-400 group-hover:text-cyan-500 group-hover:animate-pulse group-hover:scale-[1.2]">{{ props.icon }}</span>
    </div>
</template>