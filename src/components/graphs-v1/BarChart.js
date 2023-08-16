import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ height, width, data, margin }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const draw = () => {

      const chartWidth = width - margin.left - margin.right;
      const chartHeight = height - margin.top - margin.bottom
      
      // X Scale
      const xScale = d3
        .scaleBand()
        .domain([...d3.range(0,data.length)])
        .range([0, chartWidth])
      
      // Y Scale
      const yScale = d3
        .scaleLinear()
        .domain([3, -3])
        .range([0, chartHeight])
  
      // Axes
      const xAxis = d3.axisBottom(xScale)
      const yAxis = d3.axisLeft(yScale);
  
      d3.select(svgRef.current).select('.x-axis').call(xAxis);
      d3.select(svgRef.current).select('.y-axis').call(yAxis);
      
      // D3
      d3.select(svgRef.current)
        .select('g.bars')
        .selectAll('rect')
        .data(data)
        .transition()
        .duration(1000)
        .attr('x', d => xScale(d.x))
        .attr('y', d => yScale(d.y))
        .attr('width', xScale.bandwidth())
        .attr('height', d => chartHeight - yScale(d.y))
        .style('fill', d => d.color)
    }
    draw();
  }, [height, width, data, margin])

  const bars = data.map(d => <rect key={d.x} />)
  return (
    <div>
      <svg height={height} width={width} ref={svgRef}>
        <g 
          className="bars"
          style={{ transform: `translate(${margin.left}px, ${margin.top}px)`}}
        >
          {bars}
        </g>
        <g 
          className="x-axis"
          style={{ transform: `translate(${margin.left}px, ${height - margin.bottom}px)`}}
        />
        <g 
          className="y-axis"
          style={{ transform: `translate(${margin.left}px, ${margin.top}px)`}}
        />
        
      </svg>
    </div>
  )
}
export default BarChart;

/*
Notes
#0: Setup
- First, we are returning an SVG and we need to set the height and width. So we KNOW
that we have two props: height and width. We ALSO know we want data but we'll get to 
that later.
- To make it "React-ish", we'll create the SVG in the component AND the bars will also
be React elements. We'll put the <rect /> in the <svg></svg>. 
- We create a ref for the SVG that d3 will use.
#1: UseEffect Flow
- We need to draw the chart whenever the data changes. So I create a draw() function 
that will hold the d3 stuff and a useEffect() to run draw() whenever the data changes
*/