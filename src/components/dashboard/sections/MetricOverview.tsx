import React from 'react';
import { Row, Col } from 'antd';
import { FileText, Building2, Users, FolderOpen } from 'lucide-react';
import MetricCard from '../cards/MetricCard';

const MetricOverview: React.FC = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} sm={12} lg={6}>
        <MetricCard
          title="Total Applications"
          value={124}
          icon={FileText}
        />
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <MetricCard
          title="Active Companies"
          value={45}
          icon={Building2}
        />
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <MetricCard
          title="Team Members"
          value={12}
          icon={Users}
        />
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <MetricCard
          title="Pending Claims"
          value={8}
          icon={FolderOpen}
        />
      </Col>
    </Row>
  );
};

export default MetricOverview;