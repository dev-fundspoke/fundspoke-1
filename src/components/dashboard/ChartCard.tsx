import React from 'react';
import { Card, Progress } from 'antd';

interface ChartCardProps {
  title: string;
  type: 'circle' | 'bar';
  value: number;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, type, value }) => {
  return (
    <Card title={title} className="shadow-sm">
      <div className="h-[300px] flex items-center justify-center">
        {type === 'circle' ? (
          <Progress
            type="circle"
            percent={value}
            strokeColor="#A3E635"
            className="scale-150"
          />
        ) : (
          <Progress
            percent={value}
            strokeColor="#A3E635"
            size="large"
            className="w-3/4"
          />
        )}
      </div>
    </Card>
  );
};

export default ChartCard;