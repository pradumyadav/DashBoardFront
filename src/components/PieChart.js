
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../styles/PieChart.css';

const PieChart = ({ filteredData }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (filteredData.length > 0) {
      const processedData = processData(filteredData);
      drawChart(processedData);
    }
  }, [filteredData]);

  const processData = (data) => {
    
    const sortedData = data.sort((a, b) => b.count - a.count);

    
    const top5 = sortedData.slice(0, 5);
    const othersCount = sortedData.slice(5).reduce((sum, d) => sum + d.count, 0);

    if (othersCount > 0) {
      top5.push({ sector: 'Others', count: othersCount });
    }

  
    const totalCount = top5.reduce((sum, d) => sum + d.count, 0);

   
    top5.forEach(d => {
      d.percentage = (d.count / totalCount) * 100;
    });

    return top5;
  };

  const drawChart = (data) => {
    const svg = d3.select(chartRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const width = 350 - margin.left - margin.right;
    const height = 350 - margin.top - margin.bottom;
    const radius = Math.min(width, height) / 2;

    const chart = svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value((d) => d.count);

    const path = d3.arc().outerRadius(radius).innerRadius(0);
    const label = d3.arc().outerRadius(radius * 0.6).innerRadius(radius * 0.6);

    const arc = chart.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc');

    arc.append('path')
      .attr('d', path)
      .attr('fill', (d) => color(d.data.sector));

    arc.append('text')
      .attr('transform', d => {
        const pos = label.centroid(d);
        return `translate(${pos[0]}, ${pos[1]}) rotate(80)`; 
      })
      .attr('dy', '0.35em')
      .style('text-anchor', 'middle')
      .text(d => `${d.data.sector} (${d.data.percentage.toFixed(1)}%)`)
      .each(function (d) {
        const text = d3.select(this);
        const bbox = text.node().getBBox();
        const sliceRadius = radius * (d.endAngle - d.startAngle) / (2 * Math.PI);
        if (bbox.width > sliceRadius * 1.9) { 
          text.style('font-size', '8px');
        } else {
          text.style('font-size', '12px');
        }
      })
      .style('font-weight', 'bold');
  };

  return (
    <div className="pie-chart-container">
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default PieChart;
