import { useD3 } from './useD3';

const { select } = useD3();

export function useD3Container(parentId: string) {

    function createSvg(element: string, width: number, height: number) {
        const container = select(element);
        container().append('svg')
            .attr('id', `${parentId}-svg`)
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', [0, 0, width, height])
            .attr('style', 'max-width: 100%; height: auto');
    }

    return {
        createSvg,
    }
}