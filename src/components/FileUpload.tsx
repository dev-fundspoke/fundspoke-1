import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { logError } from '../utils/logger';
import { ERROR_MESSAGES } from '../utils/errorMessages';

interface FileUploadProps {
  onChange?: (info: any) => void;
  accept?: string;
  multiple?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange, accept, multiple }) => {
  const handleChange = (info: any) => {
    try {
      if (info.file.status === 'error') {
        throw new Error(`${info.file.name} failed to upload`);
      }
      onChange?.(info);
    } catch (error) {
      logError(error as Error, {
        componentName: 'FileUpload',
        fileName: 'FileUpload.tsx',
        additionalInfo: { 
          fileName: info.file.name,
          fileSize: info.file.size 
        }
      });
    }
  };

  return (
    <Upload 
      onChange={handleChange} 
      accept={accept} 
      multiple={multiple}
      onError={(error) => {
        logError(error, {
          componentName: 'FileUpload',
          fileName: 'FileUpload.tsx',
          additionalInfo: { errorType: 'UPLOAD_ERROR' }
        });
      }}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};