import React from 'react';
import { Row, Col } from 'antd';
import ChartCard from '../cards/ChartCard';

const ChartSection: React.FC = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} lg={12}>
        <ChartCard 
          title="Goal Completion" 
          type="circle"
          value={75}
        />
      </Col>
      <Col xs={24} lg={12}>
        <ChartCard 
          title="Monthly Performance" 
          type="bar"
          value={85}
        />
      </Col>
    </Row>
  );
};

export default ChartSection;