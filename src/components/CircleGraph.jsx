import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';


const CircleGraph = ({ data = [], size = 1 }) => (
  <PieChart width={320 * size} height={175 * size}>
    <Pie 
      nameKey="key" 
      dataKey="value" 
      data={data} 
      cx="50%" 
      cy="50%" 
      outerRadius={80 * size} 
      fill="#82ca9d"/>
    <Tooltip/>
  </PieChart>
);

export default CircleGraph;