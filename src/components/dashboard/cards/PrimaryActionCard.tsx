import React from 'react';
import { Card, Button } from 'antd';
import { LucideIcon } from 'lucide-react';

interface PrimaryActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const PrimaryActionCard: React.FC<PrimaryActionCardProps> = ({
  title,
  description,
  buttonText,
  icon: Icon,
  onClick
}) => {
  return (
    <Card 
      className="h-[200px] shadow-lg hover:shadow-xl transition-shadow duration-300"
      styles={{
        body: { 
          height: '100%', 
          padding: '24px'
        }
      }}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary-50">
              <Icon size={24} className="text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
          </div>
          <p className="text-secondary text-sm">{description}</p>
        </div>
        <Button 
          type="primary" 
          size="large" 
          className="w-full"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default PrimaryActionCard;