import React from 'react';
import { Layout } from 'antd';
import MainLayout from '../../components/layout/MainLayout';
import FormProgress from '../../components/FormProgress';
import { useFormNavigation } from '../../hooks/useFormNavigation';

interface NewCompanyLayoutProps {
  children: React.ReactNode;
}

const steps = [
  { title: 'Company Information' },
  { title: 'Company Logo' },
  { title: 'Addresses' },
  { title: 'Documents' },
  { title: 'Personnel' },
  { title: 'IP Portfolio' },
  { title: 'Technology' },
  { title: 'Financials' },
  { title: 'Investment' },
  { title: 'Debt' },
  { title: 'Projections' }
];

const NewCompanyLayout: React.FC<NewCompanyLayoutProps> = ({ children }) => {
  const { currentStep } = useFormNavigation(steps.length);

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <FormProgress current={currentStep} steps={steps} />
        <div className="mt-8">
          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default NewCompanyLayout;