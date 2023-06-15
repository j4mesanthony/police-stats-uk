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
    <div class="p-2 top-[7px] right-[7px] rounded-md h-[38px] hover:shadow-md box-border text-center hover:border-cyan-500 border-[1px] border-slate-900 cursor-pointer duration-100 bg-slate-950 w-fit group">
        <span class="material-symbols-outlined relative text-[20px] transition-transform  text-slate-400 group-hover:text-cyan-500 group-hover:animate-pulse group-hover:scale-[1.3]">{{ props.icon }}</span>
    </div>
</template>