import React from 'react';
import { Row, Col } from 'antd';
import { PlusCircle, Upload, BarChart3 } from 'lucide-react';
import QuickAction from '../cards/QuickAction';

const QuickActions: React.FC = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={8}>
        <QuickAction
          title="New Application"
          description="Start a new funding application"
          buttonText="Create Application"
          icon={PlusCircle}
        />
      </Col>
      <Col xs={24} md={8}>
        <QuickAction
          title="Upload Documents"
          description="Add supporting documentation"
          buttonText="Upload Files"
          icon={Upload}
        />
      </Col>
      <Col xs={24} md={8}>
        <QuickAction
          title="View Analytics"
          description="Check your performance metrics"
          buttonText="View Reports"
          icon={BarChart3}
        />
      </Col>
    </Row>
  );
};

export default QuickActions;