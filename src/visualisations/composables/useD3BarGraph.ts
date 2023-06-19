import { onMounted, ref } from 'vue';
import * as d3 from 'd3';
import { useD3 } from './useD3';
import { useD3Container } from './useD3Container';
import { useEventListener } from '../../global/composables/useEventListener';

export function useD3BarGraph(parentElementId: any) {
  const { createSvg } = useD3Container(parentElementId);
  const { selectParentAndChildren, EASE, createNodes, select } = useD3();

  // TODO: Need to set these on initial load
  const width = ref(300);
  const height = ref(160);

  onMounted(() => {
    createSvg(`#${parentElementId}`, width.value, height.value);
    redraw();
  });

  useEventListener('resize', redraw);

  function redraw() {
    const element = d3.select(`#${parentElementId}`).node();
    width.value = element.getBoundingClientRect().width;
    // TODO: Fix responsive height bug (keeps shrinking)
    // height.value = element.getBoundingClientRect().height; 

    const svgSelector = select(`#${parentElementId}-svg`);
    svgSelector()
      .attr('width', width.value)
      .attr('height', height.value)
      .attr('viewBox', [0, 0, width.value, height.value]);
  }

  function visualisation(data: any) {
      const selector = selectParentAndChildren(`#${parentElementId}-svg`, '.bar');
      const binding = selector().data(data);
      const creator = createNodes(binding);
    
      const x = d3.scaleBand()
          .domain(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
          .range([0, width.value])
          .padding(0.6);
    
      const y = d3.scaleLinear()
          .domain([0, d3.max(data, (d: any) => d.value)])
          .range([height.value, 0]);
      
      creator
        .append('rect')
        .attr('class', 'bar')
        .attr('y', () => y(0))
        .attr('height', 0);
    
      selector()
        .attr('x', (d: any) => x(d.category))
        .attr('width', x.bandwidth())
        .attr('fill', 'cyan')
        .transition()
        .ease(EASE.quadOut)
        .duration(800)
        .attr('y', (d: any) => y(d.value))
        .attr('height', (d: any) => y(0) - y(d.value));
    }

    return {
      visualisation
    }
}