import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'satisfied', value: 69,color:"#00b273" },
  { name: 'null', value: 31,color:"#7c7d81" },

];

const GraphRosc: React.FC = () => {

  return (
    <PieChart width={240} height={300} >
      <Pie
        data={data}
        cx={110}
        cy={140}
        innerRadius={60}
        outerRadius={90}
        fill="#8884d8"
        dataKey="value"
        animationDuration={3000}
        style={
          {
            filter:  `drop-shadow( 0px 0px 5px rgba(0, 250, 150,0.70) )`,
          }
        }
        animationEasing="ease-in-out"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.color}
            stroke="none"
          />
        ))}
      </Pie>
      <Legend
        layout="horizontal"
        align="center"
      />
      <Tooltip />
    </PieChart>
  );
};

export default GraphRosc;

