import * as d3 from 'd3';

export function useD3() {

    function select(elementSelector: string) {
        const selector = () => d3.select(elementSelector);
        return selector;
    }

    function selectAll(elementSelector: string) {
        const selector = () => d3.selectAll(elementSelector);
        return selector;
    }

    function selectParentAndChildren(parentSelector: string, childSelector: string) {
        const selector = () => d3.select(parentSelector).selectAll(childSelector);
        return selector;
    }

    function createNodes(binding: any) {
        binding.exit().remove();
        return binding.enter();
    }

    const EASE = {
        circle: d3.easeCircleIn,
        cubic: d3.easeCubicInOut,
        expOut: d3.easeExp,
        linear: d3.easeLinear,
        quadOut: d3.easeQuadOut
    }

    return {
        EASE,
        createNodes,
        select,
        selectAll,
        selectParentAndChildren,
    }
}