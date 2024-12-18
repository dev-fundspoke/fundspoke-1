import React from 'react';
import { Card, Timeline } from 'antd';
import { Circle } from 'lucide-react';

const RecentActivity: React.FC = () => {
  return (
    <Card title="Recent Activity" className="shadow-sm">
      <Timeline
        items={[
          {
            dot: <Circle className="text-lime-400" size={16} />,
            children: (
              <div className="pb-4">
                <p className="font-medium text-gray-800">New application submitted</p>
                <p className="text-sm text-gray-600">Tech Innovation Corp - R&D Grant</p>
              </div>
            ),
          },
          {
            dot: <Circle className="text-purple-400" size={16} />,
            children: (
              <div className="pb-4">
                <p className="font-medium text-gray-800">Claim approved</p>
                <p className="text-sm text-gray-600">DataFlow Systems - AI Development Fund</p>
              </div>
            ),
          },
          {
            dot: <Circle className="text-gray-400" size={16} />,
            children: (
              <div>
                <p className="font-medium text-gray-800">Document updated</p>
                <p className="text-sm text-gray-600">CloudTech Solutions - Financial Report</p>
              </div>
            ),
          },
        ]}
      />
    </Card>
  );
};

export default RecentActivity;