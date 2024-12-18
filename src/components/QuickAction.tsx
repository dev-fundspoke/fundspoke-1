import React from 'react';
import { Card, Button } from 'antd';

interface QuickActionProps {
  title: string;
  description: string;
  buttonText: string;
  icon: React.ReactNode;
}

const QuickAction: React.FC<QuickActionProps> = ({ title, description, buttonText, icon }) => {
  return (
    <Card className="h-[180px] shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lime-400">{icon}</span>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <Button type="primary" className="bg-lime-400 hover:bg-lime-500 w-full">
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default QuickAction;