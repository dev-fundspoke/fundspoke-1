import { useState } from 'react';
import { logError } from '../utils/logger';

export const useFormNavigation = (totalSteps: number) => {
  const [currentStep, setCurrentStep] = useState(0);

  const validateStep = (step: number) => {
    if (step < 0 || step >= totalSteps) {
      throw new Error(`Invalid step: ${step}. Must be between 0 and ${totalSteps - 1}`);
    }
  };

  const next = () => {
    try {
      const nextStep = currentStep + 1;
      validateStep(nextStep);
      setCurrentStep(nextStep);
    } catch (error) {
      logError(error as Error, {
        componentName: 'useFormNavigation',
        fileName: 'useFormNavigation.ts',
        additionalInfo: { 
          action: 'next',
          currentStep,
          totalSteps 
        }
      });
    }
  };

  const prev = () => {
    try {
      const prevStep = currentStep - 1;
      validateStep(prevStep);
      setCurrentStep(prevStep);
    } catch (error) {
      logError(error as Error, {
        componentName: 'useFormNavigation',
        fileName: 'useFormNavigation.ts',
        additionalInfo: { 
          action: 'prev',
          currentStep,
          totalSteps 
        }
      });
    }
  };

  const goTo = (step: number) => {
    try {
      validateStep(step);
      setCurrentStep(step);
    } catch (error) {
      logError(error as Error, {
        componentName: 'useFormNavigation',
        fileName: 'useFormNavigation.ts',
        additionalInfo: { 
          action: 'goTo',
          targetStep: step,
          currentStep,
          totalSteps 
        }
      });
    }
  };

  return {
    currentStep,
    next,
    prev,
    goTo,
  };
};