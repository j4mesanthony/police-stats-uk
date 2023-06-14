import { onMounted, onBeforeUnmount } from "vue";

export function useEventListener(type: string, method: any): void {
    onMounted(() => {
        window.addEventListener(type, method);
    });

    onBeforeUnmount(() => {
        window.removeEventListener(type, method);
    })
}