import React from 'react';
import { Row, Col } from 'antd';
import { Building2, Settings, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PrimaryActionCard from '../cards/PrimaryActionCard';
import { logError } from '../../../utils/logger';

const PrimaryActions: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    try {
      navigate(path);
    } catch (error) {
      logError(error as Error, {
        componentName: 'PrimaryActions',
        fileName: 'PrimaryActions.tsx',
        additionalInfo: { navigationPath: path }
      });
    }
  };

  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} lg={8}>
        <PrimaryActionCard
          title="Add a New Company"
          description="Start a new company profile and complete the progressive form"
          buttonText="Start New Company"
          icon={Building2}
          onClick={() => handleNavigation('/company/new')}
        />
      </Col>
      <Col xs={24} lg={8}>
        <PrimaryActionCard
          title="AI Indicator Dashboard"
          description="Track and manage your company's key performance indicators"
          buttonText="Go to AI Indicator Dashboard"
          icon={Settings}
          onClick={() => handleNavigation('/ai-indicators')}
        />
      </Col>
      <Col xs={24} lg={8}>
        <PrimaryActionCard
          title="Create a New Funding Application"
          description="Submit a new funding application for your selected company"
          buttonText="Create Application"
          icon={FileText}
          onClick={() => handleNavigation('/funding/new')}
        />
      </Col>
    </Row>
  );
};

export default PrimaryActions;