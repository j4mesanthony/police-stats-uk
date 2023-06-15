import { UseWindowSize } from "../../interfaces/interfaceLibrary";
import { useEventListener } from "./useEventListener";
import { onMounted, ref } from "vue";

export function useWindowSize(): UseWindowSize {
    const isMobile = ref(false);

    onMounted(() => setIsMobile());
    useEventListener('resize', setIsMobile);

    function setIsMobile(): void {
        const width = window.innerWidth;
        isMobile.value = width < 768;
    }

    return {
        isMobile
    }
}