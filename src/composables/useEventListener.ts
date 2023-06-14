import { onMounted, onBeforeUnmount } from "vue";

export function useEventListener(type: string, method: any, element: any = window): void {
    onMounted(() => {
        element.addEventListener(type, method);
    });

    onBeforeUnmount(() => {
        element.removeEventListener(type, method);
    })
}