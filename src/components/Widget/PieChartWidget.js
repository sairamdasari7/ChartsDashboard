import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const PieChartWidget = ({ data }) => (
  <div className="widget pie-chart-widget">
    <h3>User Demographics</h3>
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" outerRadius={150} fill="#8884d8" label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#ff7300' : '#387908'} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
);

export default PieChartWidget;
