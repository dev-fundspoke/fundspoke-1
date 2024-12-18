import React from 'react';
import { Card } from 'antd';
import FileUpload from '../../components/FileUpload';
import { logError } from '../../utils/logger';
import { ERROR_MESSAGES } from '../../utils/errorMessages';

const DocumentLibrary: React.FC = () => {
  const handleFileChange = async (info: any) => {
    try {
      // File upload logic here
      if (info.file.status === 'done') {
        // Handle successful upload
      }
    } catch (error) {
      logError(error as Error, {
        componentName: 'DocumentLibrary',
        fileName: 'DocumentLibrary.tsx',
        additionalInfo: { 
          fileInfo: info.file,
          uploadType: 'document'
        }
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Document Library</h2>
      <Card className="shadow-sm">
        <FileUpload 
          accept=".pdf,.doc,.docx"
          multiple
          onChange={handleFileChange}
        />
      </Card>
    </div>
  );
};