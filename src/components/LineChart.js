// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const LineChart = ({ data }) => {
//     const chartRef = useRef();

//     useEffect(() => {
//       if (data.length > 0) {
//         drawChart(data);
//       }
//     }, [data]);
  
//     const drawChart = (data) => {
//       const svg = d3.select(chartRef.current);
//       svg.selectAll('*').remove();
  
//       const margin = { top: 20, right: 30, bottom: 40, left: 60 };
//       const width = 800 - margin.left - margin.right;
//       const height = 600 - margin.top - margin.bottom;
  
//       const chart = svg
//         .attr('width', width + margin.left + margin.right)
//         .attr('height', height + margin.top + margin.bottom)
//         .append('g')
//         .attr('transform', `translate(${margin.left},${margin.top})`);
  
//       const x = d3
//         .scaleBand()
//         .domain(data.map(d => d.country))
//         .range([0, width])
//         .padding(0.1);
  
//       const y = d3.scaleLinear()
//         .domain([0, d3.max(data, d => d.intensity)])
//         .nice()
//         .range([height, 0]);
  
//       chart.append('g')
//         .selectAll('.bar')
//         .data(data)
//         .enter()
//         .append('rect')
//         .attr('class', 'bar')
//         .attr('x', d => x(d.country))
//         .attr('y', d => y(d.intensity))
//         .attr('width', x.bandwidth())
//         .attr('height', d => height - y(d.intensity))
//         .attr('fill', 'steelblue');
  
//       chart.append('g')
//         .attr('class', 'x-axis')
//         .attr('transform', `translate(0,${height})`)
//         .call(d3.axisBottom(x))
//         .selectAll('text')
//         .style('text-anchor', 'end')
//         .attr('dx', '-.8em')
//         .attr('dy', '.15em')
//         .attr('transform', 'rotate(-65)');
  
//       chart.append('g')
//         .attr('class', 'y-axis')
//         .call(d3.axisLeft(y));
//     };
  
//     return (
//       <div className="chart-container">
//         <svg ref={chartRef}></svg>
//       </div>
//     );
//   };
  


// export default LineChart;
