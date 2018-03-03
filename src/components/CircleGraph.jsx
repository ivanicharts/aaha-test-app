import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';


const CircleGraph = ({ data = [], size = 1 }) => {

  const Data = data.map(e => {
    e.name = e.key;

    return e;
  })

  return (
    <PieChart width={320 * size} height={175 * size}>
      {/* <Pie isAnimationActive={false} data={Data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label/> */}
      <Pie data={Data} cx="50%" cy="50%" outerRadius={80 * size} fill="#82ca9d"/>
      <Tooltip/>
    </PieChart>
  )
};

export default CircleGraph;