import React from 'react';
import { Card, Timeline } from 'antd';
import { Circle } from 'lucide-react';

const ActivityTimeline: React.FC = () => {
  const activities = [
    {
      title: 'New application submitted',
      description: 'Tech Innovation Corp - R&D Grant',
      color: '#A3E635'
    },
    {
      title: 'Claim approved',
      description: 'DataFlow Systems - AI Development Fund',
      color: '#C5B3F9'
    },
    {
      title: 'Document updated',
      description: 'CloudTech Solutions - Financial Report',
      color: '#9CA3AF'
    }
  ];

  return (
    <Card title="Recent Activity" className="shadow-sm">
      <Timeline
        items={activities.map(activity => ({
          dot: <Circle className="fill-current" size={16} color={activity.color} />,
          children: (
            <div className="pb-4">
              <p className="font-medium text-neutral-text">{activity.title}</p>
              <p className="text-sm text-gray-600">{activity.description}</p>
            </div>
          )
        }))}
      />
    </Card>
  );
};

export default ActivityTimeline;