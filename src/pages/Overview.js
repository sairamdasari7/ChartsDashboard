import React from 'react';
import LineChartWidget from '../components/Widget/LineChartWidget';
import BarChartWidget from '../components/Widget/BarChartWidget';
import PieChartWidget from '../components/Widget/PieChartWidget';
import ActivityFeed from '../components/Widget/ActivityFeed';
// import CheckTable from '../components/Tables/CheckTable';
// import TaskList from '../components/Widgets/TaskList';

// Mock data
const mockLineChartData = [
  { name: 'Jan', uv: 4000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
];

const mockBarChartData = [
  { name: 'Jan', sales: 2400 },
  { name: 'Feb', sales: 2210 },
  { name: 'Mar', sales: 2290 },
  { name: 'Apr', sales: 2000 },
  { name: 'May', sales: 2181 },
  { name: 'Jun', sales: 2500 },
  { name: 'Jul', sales: 2100 },
];

const mockPieChartData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const mockActivityFeed = [
  'User John Doe signed in',
  'User Jane Smith updated profile',
  'System alert: High CPU usage',
];

const Overview = () => {
  return (
    <div>
      <LineChartWidget data={mockLineChartData} />
      <BarChartWidget data={mockBarChartData} />
      <PieChartWidget data={mockPieChartData} />
      <ActivityFeed data={mockActivityFeed} />
    </div>
  );
};

export default Overview;
