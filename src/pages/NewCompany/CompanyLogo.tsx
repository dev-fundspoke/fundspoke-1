import React from 'react';
import { Card, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { logError } from '../../utils/logger';
import { ERROR_MESSAGES } from '../../utils/errorMessages';

const CompanyLogo: React.FC = () => {
  const handleUpload = async (info: any) => {
    try {
      if (info.file.status === 'done') {
        // Handle successful upload
      } else if (info.file.status === 'error') {
        throw new Error('Failed to upload logo');
      }
    } catch (error) {
      logError(error as Error, {
        componentName: 'CompanyLogo',
        fileName: 'CompanyLogo.tsx',
        additionalInfo: { 
          fileInfo: info.file,
          uploadType: 'logo'
        }
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Company Logo</h2>
      <Card className="shadow-sm">
        <Upload
          accept="image/*"
          listType="picture-card"
          showUploadList={false}
          onChange={handleUpload}
          maxCount={1}
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload Logo</div>
          </div>
        </Upload>
      </Card>
    </div>
  );
};