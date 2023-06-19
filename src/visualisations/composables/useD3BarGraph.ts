import { onMounted, ref } from 'vue';
import * as d3 from 'd3';
import { useD3 } from './useD3';
import { useD3Container } from './useD3Container';
import { useEventListener } from '../../global/composables/useEventListener';

const { createSvg } = useD3Container();
const { selectParentAndChildren, EASE, createNodes } = useD3();

export function useD3BarGraph(parentElementId: any) {
  const width = ref(0);
  const height = ref(0);

  useEventListener('resize', redraw);

  function redraw() {
    const element = d3.select(`#${parentElementId}`).node();
    width.value = element.getBoundingClientRect().width;
    height.value = element.getBoundingClientRect().height;
  }

  onMounted(() => {
    createSvg(`#${parentElementId}`, 300, 160);
  });

  function visualisation(data: any) {
      const selector = selectParentAndChildren('#svg', '.bar');
      const binding = selector().data(data);
      const creator = createNodes(binding);
    
      const x = d3.scaleBand()
          .domain(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
          .range([0, 300])
          .padding(0.6);
    
      const y = d3.scaleLinear()
          .domain([0, d3.max(data, (d: any) => d.value)])
          .range([160, 0]);
      
      creator
        .append('rect')
        .attr('class', 'bar');
    
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