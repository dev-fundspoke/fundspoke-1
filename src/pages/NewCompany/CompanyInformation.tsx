import React from 'react';
import { Form, Input, Button } from 'antd';
import { logError } from '../../utils/logger';

const CompanyInformation: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    try {
      // Form submission logic here
    } catch (error) {
      logError(error as Error, {
        componentName: 'CompanyInformation',
        fileName: 'CompanyInformation.tsx',
        additionalInfo: { formValues: values }
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Company Information</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Company Name"
          name="name"
          rules={[{ required: true, message: 'Please enter company name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CompanyInformation;