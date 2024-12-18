import React from 'react';
import { Card } from 'antd';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon: Icon }) => {
  return (
    <Card className="h-[120px] shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-secondary text-sm mb-2">{title}</p>
          <p className="text-2xl font-semibold text-primary">{value}</p>
        </div>
        <div className="text-primary-400">
          <Icon size={24} />
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;