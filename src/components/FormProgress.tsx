import React from 'react';
import { Steps } from 'antd';
import { logError } from '../utils/logger';

interface FormProgressProps {
  current: number;
  steps: { title: string; description?: string }[];
}

const FormProgress: React.FC<FormProgressProps> = ({ current, steps }) => {
  try {
    if (current < 0 || current >= steps.length) {
      throw new Error(`Invalid step index: ${current}`);
    }

    return <Steps current={current} items={steps} />;
  } catch (error) {
    logError(error as Error, {
      componentName: 'FormProgress',
      fileName: 'FormProgress.tsx',
      additionalInfo: { 
        currentStep: current,
        totalSteps: steps.length 
      }
    });
    return null;
  }
};