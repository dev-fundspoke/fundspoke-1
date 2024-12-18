import React from 'react';
import { Card, Button } from 'antd';
import { LucideIcon } from 'lucide-react';

interface QuickActionProps {
  title: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
}

const QuickAction: React.FC<QuickActionProps> = ({
  title,
  description,
  buttonText,
  icon: Icon
}) => {
  return (
    <Card className="h-[180px] shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary-400">
              <Icon size={24} />
            </span>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
          </div>
          <p className="text-sm text-secondary">{description}</p>
        </div>
        <Button type="primary" className="w-full">
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default QuickAction;