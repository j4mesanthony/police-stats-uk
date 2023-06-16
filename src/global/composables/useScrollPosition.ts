import { ref } from 'vue';
import { useEventListener } from './useEventListener';
import { UseScrollPosition } from '../../interfaces/interfaceLibrary';

export function useScrollPosition(element: any = window): UseScrollPosition {
    const xPos = ref(0);
    const yPos = ref(0);

    useEventListener('scroll', setPositions);

    function setPositions(): void {
        xPos.value = element.scrollX;
        yPos.value = element.scrollY;
    }

    return {
        xPos,
        yPos
    }
}