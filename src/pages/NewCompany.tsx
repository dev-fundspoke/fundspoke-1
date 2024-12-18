import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const NewCompany: React.FC = () => {
  return (
    <Layout>
      <Content className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">New Company Registration</h1>
        {/* Content will be implemented later */}
      </Content>
    </Layout>
  );
};

export default NewCompany;