import React from 'react';
import { Card, Timeline } from 'antd';
import { Circle } from 'lucide-react';

interface Activity {
  title: string;
  description: string;
  color: string;
}

const ActivityTimeline: React.FC = () => {
  const activities: Activity[] = [
    {
      title: 'New application submitted',
      description: 'Tech Innovation Corp - R&D Grant',
      color: 'text-primary-400'
    },
    {
      title: 'Claim approved',
      description: 'DataFlow Systems - AI Development Fund',
      color: 'text-secondary-500'
    },
    {
      title: 'Document updated',
      description: 'CloudTech Solutions - Financial Report',
      color: 'text-neutral-400'
    }
  ];

  return (
    <Card title="Recent Activity" className="shadow-sm">
      <Timeline
        items={activities.map(activity => ({
          dot: <Circle className={`${activity.color}`} size={16} />,
          children: (
            <div className="pb-4">
              <p className="font-medium text-primary">{activity.title}</p>
              <p className="text-sm text-secondary">{activity.description}</p>
            </div>
          )
        }))}
      />
    </Card>
  );
};

export default ActivityTimeline;