import { LucideIcon } from 'lucide-react';

export interface MetricCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
}

export interface ChartCardProps {
  title: string;
  type: 'circle' | 'bar';
  value: number;
}

export interface QuickActionProps {
  title: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export interface PrimaryActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export interface Activity {
  title: string;
  description: string;
  color: string;
}