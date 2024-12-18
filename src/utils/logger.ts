import { notification } from 'antd';

interface ErrorContext {
  componentName?: string;
  fileName?: string;
  additionalInfo?: Record<string, unknown>;
}

export const logError = (
  error: Error | string,
  context: ErrorContext = {}
): void => {
  const errorMessage = error instanceof Error ? error.message : error;
  const errorStack = error instanceof Error ? error.stack : new Error().stack;
  const { componentName, fileName, additionalInfo } = context;

  // Log to console with detailed information
  console.error('Error Details:', {
    message: errorMessage,
    stack: errorStack,
    component: componentName,
    file: fileName,
    ...additionalInfo,
    timestamp: new Date().toISOString(),
  });

  // Show user-friendly notification
  notification.error({
    message: 'An error occurred',
    description: errorMessage,
    placement: 'topRight',
    duration: 5,
  });
};