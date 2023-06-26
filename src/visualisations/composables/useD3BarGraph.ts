import { onMounted, ref } from 'vue';
import * as d3 from 'd3';
import { useD3Selectors } from './useD3Selectors';
import { useD3Container } from './useD3Container';
import { useEventListener } from '../../global/composables/useEventListener';
import { BarGraphDataObj, BarGraphOptions } from '../../interfaces/interfaceLibrary';

export function useD3BarGraph(parentElementId: any) {
  const { createSvg } = useD3Container(parentElementId);
  const { selectParentAndChildren, EASE, createNodes, select } = useD3Selectors();

  const width = ref(300);
  const height = ref(160);
  const barClass = 'bar';

  let x: any = null;
  let y: any = null;

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

  function visualisation(data: any, options?: BarGraphOptions) {
    axis(data, options);
    bars(data, options);
  }

  function axis(data: Array<BarGraphDataObj>, options: BarGraphOptions = {}) {
    const DEFAULT_PADDING = 0.6;
    const dataCategories: Array<string> = data.map((x: BarGraphDataObj) => x.category);
    const uniqueCategories: Array<string> = [...new Set(dataCategories)];
    const { padding } = options;
    
    x = d3.scaleBand()
        .domain(uniqueCategories)
        .range([0, width.value])
        .padding(padding ?? DEFAULT_PADDING);
  
    y = d3.scaleLinear()
        .domain([0, d3.max(data, (d: any) => d.value)])
        .range([height.value, 0]);
  }

  function bars(data: Array<BarGraphDataObj>, options: BarGraphOptions = {}) {
    const DEFAULT_BAR_RADIUS = 8;
    const DEFAULT_DURATION = 800;
    const selector = selectParentAndChildren(`#${parentElementId}-svg`, `.${barClass}`);
    const binding = selector().data(data);
    const creator = createNodes(binding);
    const { bar_fill, bar_radius, duration } = options;

    creator
      .append('rect')
      .attr('class', barClass)
      .attr('y', () => y(0))
      .attr('rx', bar_radius ?? DEFAULT_BAR_RADIUS)
      .attr('height', 0);
  
    selector()
      .attr('x', (d: any) => x(d.category))
      .attr('width', x.bandwidth())
      .attr('fill', bar_fill ?? 'white')
      .transition()
      .ease(EASE.quadOut)
      .duration(duration ?? DEFAULT_DURATION)
      .attr('y', (d: any) => y(d.value))
      .attr('height', (d: any) => y(0) - y(d.value));
  }

  return {
    visualisation
  }
}