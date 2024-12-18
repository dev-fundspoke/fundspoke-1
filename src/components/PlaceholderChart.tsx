import React from 'react';
import { Card } from 'antd';

interface PlaceholderChartProps {
  title: string;
}

const PlaceholderChart: React.FC<PlaceholderChartProps> = ({ title }) => {
  return (
    <Card title={title} className="shadow-sm">
      <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
        <p className="text-gray-400">Chart visualization coming soon</p>
      </div>
    </Card>
  );
};

export default PlaceholderChart;